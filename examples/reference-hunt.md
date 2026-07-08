# Reference Hunt: `vendor/rate-limiter` -> TypeScript Client

Reference inspected:

- `vendor/rate-limiter/src/retry.rs`
- `vendor/rate-limiter/tests/retry_policy.rs`
- Existing target: `packages/client/src/retry.ts`

What it actually does:

- Retries only idempotent requests.
- Uses exponential backoff capped at 8 seconds.
- Honors `Retry-After` when present.
- Stops immediately on 400, 401, 403, and validation errors.

Semantics to preserve:

| Behavior | Evidence | Target mapping | Test needed |
| --- | --- | --- | --- |
| Retry 429 with server delay | `retry_policy.rs` case `honors_retry_after` | Parse header in `retry.ts` | Header-driven delay test |
| Do not retry POST by default | `retry.rs` method guard | Require `idempotencyKey` for POST retry | POST without key test |
| Stop on auth failure | `non_retryable_statuses` list | Keep status denylist | 401 and 403 tests |

Differences from current codebase:

- Current client retries any network error three times with fixed delay.
- Target client has no explicit idempotency marker.

Implementation mapping:

- Module/API: `packages/client/src/retry.ts`
- Data/state: add `idempotencyKey?: string` to request options.
- Tests: unit tests for status handling and one fake-timer test for delay.

Confirmation needed:

- Should POST retry be allowed only with an idempotency key?
