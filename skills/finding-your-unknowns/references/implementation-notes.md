# Implementation Notes

## Purpose

Track reality diverging from the plan during implementation so surprises become visible decisions instead of silent guesses.

## Use When

- The codebase contradicts the plan.
- A dependency, schema, API, test, or design-system convention behaves differently than expected.
- The agent must choose a conservative default while the user is unavailable.
- A change affects migration, rollback, public API, security, or data integrity.

## Behavior

- Create or update notes only in a scoped location.
- Prefer an existing feature docs location. If none exists, use `docs/implementation-notes/<task>.md` with a short, filesystem-safe task name.
- Do not create a generic repo-root `implementation-notes.md`.
- If no appropriate scoped location exists, summarize the notes in the final response unless the user explicitly wants a file.
- Append notes rather than rewriting history.
- Keep working unless the surprise changes architecture, data model, security/privacy behavior, public API, or irreversible migration.
- Ask one high-impact question when the new reality materially changes the user's likely decision.

## Entry Template

```markdown
## <YYYY-MM-DD HH:MM> - <short title>

Planned assumption:
- ...

Observed reality:
- ...

Evidence:
- ...

Decision:
- ...

Why this default is conservative/reversible:
- ...

Follow-up needed:
- ...
```

## Procedure

1. Pause long enough to record the deviation.
2. Tie the note to evidence: file, test, command output, schema, or product behavior.
3. Decide whether the deviation is blocking:
   - Blocking: architecture, data model, security/privacy, public API, irreversible migration.
   - Non-blocking: localized implementation detail, naming, small refactor, reversible UI detail.
4. For non-blocking deviations, choose the conservative default and continue.
5. At the end, summarize deviations in the final response or buy-in doc.

## Output Template

```markdown
Implementation notes updated:
- File or final-response section: ...
- Key deviation: ...
- Decision: ...
- Still blocked? Yes/No
```

## Guidance

- Do not use notes as a substitute for fixing the plan.
- Do not stop implementation for low-impact surprises.
- Keep notes factual enough that a reviewer can audit the decision later.
