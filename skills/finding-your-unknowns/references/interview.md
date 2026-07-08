# Interview

## Purpose

Resolve known unknowns by asking the user one high-impact question at a time.

## Use When

- The user or agent has named ambiguity.
- Multiple answers would lead to different architecture, data model, UX, public API, security posture, migration, or release behavior.
- Cheap inspection cannot answer the question.

## Rules

- Ask one question at a time.
- Prefer multiple-choice only when it helps the user answer quickly.
- Do not ask questions whose answers would not change the next implementation step.
- Stop when remaining questions are low-impact or can be handled by a reversible assumption.
- After each answer, record the decision and implementation implication.

## Procedure

1. Inventory known unknowns.
2. Rank by blast radius:
   - Architecture.
   - Data model or migrations.
   - Public API or compatibility.
   - Security, privacy, permissions, or compliance.
   - UX flow and product promise.
   - Release, rollback, observability, or operations.
3. Ask the top question and wait for the answer.
4. Update the decision record.
5. Repeat only if the next question still changes the implementation materially.

## Question Format

```markdown
Question 1:
<one concise question>

Why it matters:
<what would change based on the answer>

Options:
1. <option> - <implication>
2. <option> - <implication>
3. <option> - <implication>
```

## Output Template After Interview

```markdown
# Decision Record: <feature>

Decisions:
| Decision | User answer | Implementation implication |
| --- | --- | --- |
| ... | ... | ... |

Assumptions:
- ...

Remaining low-impact unknowns:
- ...

Ready to implement:
- Yes/No, because ...
```

## Guidance

- If the user asked for direct implementation and the ambiguity is not high-impact, state the assumption and proceed.
- If the user cannot answer, recommend the conservative default and explain how to reverse it.
