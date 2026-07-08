# Buy-In Doc

## Purpose

Package finished or near-finished work so reviewers, stakeholders, or teammates can understand the value, decisions, alternatives, and risks without reconstructing the whole thread.

## Use When

- The work is ready for review or decision.
- The user needs to convince stakeholders.
- The implementation has tradeoffs that reviewers may question.
- A demo, prototype, or diff needs a concise narrative.

## Inputs To Gather

- Final diff or changed files.
- Tests run and results.
- Demo path, screenshots, or before/after behavior.
- Implementation notes, decision records, and rejected alternatives.
- Known risks and mitigations.

## Procedure

1. Lead with the outcome and demo/before-after.
2. Explain what changed in user-visible terms.
3. State important decisions and why they were made.
4. Name alternatives rejected and the reason for rejection.
5. List risks with mitigations or open questions.
6. Pre-answer likely reviewer concerns.
7. End with the exact decision or feedback requested.

## Output Template

```markdown
# Buy-In Doc: <change>

Summary:
- ...

Demo or before/after:
- ...

What changed:
- ...

Decisions made:
| Decision | Reason | Evidence |
| --- | --- | --- |
| ... | ... | ... |

Alternatives rejected:
- ...

Risks and mitigations:
| Risk | Mitigation | Owner/next step |
| --- | --- | --- |
| ... | ... | ... |

Reviewer questions pre-answered:
- ...

Decision needed:
- ...
```

## Guidance

- Keep it skimmable.
- Use concrete evidence from the repo and tests.
- Do not oversell. Make residual risk explicit.
- If the audience is non-technical, move implementation detail below the decision summary.
