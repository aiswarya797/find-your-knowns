# Blindspot Pass: Passkey Login In Auth Module

Map:

- User asked for passkey login alongside existing password auth.
- Known constraints: existing sessions must keep working; rollout should be reversible.

Territory inspected:

- `src/auth/session.ts`
- `src/auth/password-login.ts`
- `db/schema.sql`
- `tests/auth/session.test.ts`
- `docs/security.md`

Likely hidden constraints:

| Risk | Evidence | Impact | Next action |
| --- | --- | --- | --- |
| Sessions assume password credentials | `session.ts` stores `credential_type=password` | High | Inspect session creation and add credential-agnostic tests |
| User table has no credential collection | `schema.sql` has one password hash column | High | Ask whether passkeys are additive or replacing password |
| Recovery flow may bypass passkey state | `password-reset.ts` re-enables account directly | Medium | Add regression test for reset + passkey enrollment |
| Audit log lacks auth method | `audit_events` only stores `LOGIN_SUCCESS` | Medium | Add method metadata or document limitation |

Codebase areas to inspect next:

- `src/auth/recovery/**`
- `src/audit/**`
- `tests/auth/**`

Domain concepts the user may be missing:

- Passkey enrollment and login are separate flows.
- Recovery policy matters as much as the happy-path login.
- Credential deletion needs a last-credential guard.

Prompt upgrade:

> Add passkey login as an additional credential type. Preserve password login,
> record auth method in audit logs, prevent deleting the last credential, and
> include regression tests for password reset, enrollment, and login.
