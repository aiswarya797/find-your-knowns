# Change Quiz

## Purpose

Ensure the user understands a large change before merge by turning the explanation into a checkable artifact.

## Use When

- The user asks to understand a branch, PR, large diff, migration, or refactor before merging.
- The change is large enough that a normal summary may create false confidence.
- The user needs to know risks, affected modules, and operational implications.

## Inputs To Gather

- Diff, changed files, and commit history if relevant.
- Tests run and outstanding failures.
- Implementation notes and decision records.
- Public API, data, migration, security, or UX changes.

## Procedure

1. Inspect the actual diff and affected files.
2. Explain what changed and why at the right level for the user.
3. List files/modules affected by responsibility, not just path.
4. Call out key risks, reviewer focus areas, and rollback concerns.
5. Write quiz questions that test real understanding:
   - What changed?
   - Why this approach?
   - What could break?
   - Where would you debug first?
   - What should reviewers verify?
6. Put the answer key in a separate section after the quiz.

## Output Template

```markdown
# Change Quiz: <branch/change>

What changed:
- ...

Why it changed:
- ...

Affected files/modules:
| Area | Files | Responsibility |
| --- | --- | --- |
| ... | ... | ... |

Key risks:
- ...

Quiz:
1. ...
2. ...
3. ...
4. ...
5. ...

Answer key:
1. ...
2. ...
3. ...
4. ...
5. ...
```

## Guidance

- Questions should be answerable from the explanation and diff.
- Do not make trivia questions about line numbers.
- Include at least one risk or rollback question for high-blast-radius changes.
- If the quiz reveals user confusion, route back to `teach-me-my-unknowns.md` or `buy-in-doc.md`.
