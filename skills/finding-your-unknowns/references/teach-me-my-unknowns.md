# Teach Me My Unknowns

## Purpose

Teach missing vocabulary, standards, mental models, and quality criteria so the user and agent can judge the work in an unfamiliar domain.

## Use When

- The user says they are new to a domain, framework, module, protocol, or product area.
- The task depends on expert judgment the user may not yet have.
- The user asks what they should know before deciding.
- The work has quality bars that are not obvious from the prompt.

## Procedure

1. Inspect local docs and code first when the domain exists in the repo.
2. Separate general domain knowledge from project-specific conventions.
3. Explain the smallest useful vocabulary set. Do not write a textbook.
4. Describe what experts optimize for and what they reject.
5. Give a quality rubric the user can apply to proposals or code.
6. Name common failure modes and how to detect them early.
7. End with the user's next useful decision or prompt.

## Output Template

```markdown
# Unknowns Tutorial: <domain>

What you already know:
- ...

Key concepts:
| Concept | Why it matters here | How to recognize it in this repo |
| --- | --- | --- |
| ... | ... | ... |

What experts care about:
- ...

How to judge quality:
- ...

Common failure modes:
| Failure mode | Early signal | Prevention |
| --- | --- | --- |
| ... | ... | ... |

Questions worth answering next:
1. <single highest-impact question>
```

## Guidance

- Use examples from the current repo when possible.
- Keep advice decision-oriented.
- If the user needs a visual or interactive explanation, create a small artifact instead of a long essay.
- If implementation is now clear, transition into the implementation or planning workflow.
