# Tweakable Plan

## Purpose

Produce an implementation plan ordered by likelihood of user veto, not by chronological execution. This lets the user react to the decisions that would be expensive to change later.

## Use When

- The agent is about to create a large implementation plan.
- The plan includes data model, API, UX, security, migration, or release choices.
- The user asked for a plan but has not committed to key tradeoffs.
- A normal chronological plan would hide the most controversial decisions.

## Procedure

1. Inspect the relevant codebase territory first.
2. Identify choices most likely to be vetoed or reversed.
3. Present those decisions before implementation phases.
4. Include recommended defaults and why they are reversible or safe.
5. Define phases only after decision points are clear.
6. Include test, migration, rollback, and observability considerations.
7. Ask one question only if a veto-prone decision cannot safely default.

## Output Template

```markdown
# Tweakable Plan: <feature>

Territory inspected:
- ...

Most veto-prone decisions:
| Decision | Recommended default | Why it may change | Cost to change later |
| --- | --- | --- | --- |
| ... | ... | ... | Low/Med/High |

Data model/API/UX choices:
- ...

Implementation phases:
1. ...
2. ...
3. ...

Test plan:
- Unit: ...
- Integration: ...
- Browser/manual: ...
- Regression: ...

Rollback or migration considerations:
- ...

One decision needed now:
- ...
```

## Guidance

- Do not bury product or API decisions under implementation chores.
- Keep phases executable.
- If the path is clear and the user asked for implementation, start work after noting assumptions.
