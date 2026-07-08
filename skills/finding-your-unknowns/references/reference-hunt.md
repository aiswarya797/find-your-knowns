# Reference Hunt

## Purpose

Use working code, product behavior, specs, screenshots, or external references as the source of truth before implementing equivalent behavior.

## Use When

- The user points to an existing implementation, competitor, old feature, prototype, RFC, or library.
- Exact semantics matter more than a broad description.
- The agent could easily miss edge cases by reading only the prompt.

## Procedure

1. Locate and inspect the reference. If the reference is unavailable, ask for the path, link, screenshot, or sample input/output.
2. Summarize what the reference actually does, not what it appears to intend.
3. Extract semantics to preserve:
   - Inputs and outputs.
   - State transitions.
   - Error behavior.
   - Ordering, timing, retry, or idempotency rules.
   - Permissions and boundary checks.
   - Edge cases and defaults.
4. Compare the reference against the current codebase constraints.
5. Map reference semantics to target modules, APIs, tests, and data shapes.
6. Ask for confirmation before implementation if exact behavior is important or if the mapping requires tradeoffs.

## Output Template

```markdown
# Reference Hunt: <reference> -> <target>

Reference inspected:
- ...

What it actually does:
- ...

Semantics to preserve:
| Behavior | Evidence | Target mapping | Test needed |
| --- | --- | --- | --- |
| ... | ... | ... | ... |

Differences from current codebase:
- ...

Implementation mapping:
- Module/API: ...
- Data/state: ...
- Tests: ...

Confirmation needed:
- ...
```

## Guidance

- Treat reference behavior as evidence, not decoration.
- Preserve semantics before style unless the user says the reference is only visual inspiration.
- If porting between languages, separate behavior from implementation technique.
