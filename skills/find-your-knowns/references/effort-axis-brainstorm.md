# Effort-Axis Brainstorm

## Purpose

Show possible solutions across implementation cost so the user can choose a risk/reward point before the agent overcommits to one path.

## Use When

- The problem is real but the intervention is unclear.
- The user asks for ideas, options, or "what would you do?"
- There are multiple plausible solution depths.
- Time budget, migration risk, or product validation risk matters.

## Procedure

1. Inspect the codebase or product surface enough to ground options in what exists.
2. Frame the objective and constraints.
3. Generate options on four effort axes:
   - One-hour option.
   - One-day option.
   - One-week option.
   - Larger bet.
4. For each option, include scope, expected impact, implementation touchpoints, validation method, and reason to reject it.
5. Recommend one option based on risk/reward and explain the assumption behind the recommendation.
6. Offer the smallest next probe that would improve the decision.

## Output Template

```markdown
# Effort-Axis Brainstorm: <problem>

Objective:
- ...

Constraints observed:
- ...

| Option | Scope | Touchpoints | Upside | Risk | Proof |
| --- | --- | --- | --- | --- | --- |
| One hour | ... | ... | ... | ... | ... |
| One day | ... | ... | ... | ... | ... |
| One week | ... | ... | ... | ... | ... |
| Larger bet | ... | ... | ... | ... | ... |

Recommendation:
- Choose: ...
- Because: ...
- Revisit if: ...

Next probe:
- ...
```

## Guidance

- Make the cheap option genuinely shippable or clearly label it as a probe.
- Do not inflate every idea into a roadmap.
- Include a no-build or configuration-only option when credible.
