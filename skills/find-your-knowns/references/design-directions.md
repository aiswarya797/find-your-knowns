# Design Directions

## Purpose

Reveal unknown knowns by giving the user divergent alternatives they can react to. This is for taste, UX direction, visual hierarchy, interaction models, and product feel that the user cannot fully specify upfront.

## Use When

- The user says "better", "cleaner", "nice", "intuitive", "premium", "modern", "production-ready", or "like X".
- The task is design-heavy and the existing product direction is unclear.
- The user would know the right direction when they see it.

## Procedure

1. Inspect the current UI, component library, routes, design tokens, copy style, screenshots, or adjacent screens.
2. Identify constraints the directions must share: data density, user role, device sizes, accessibility, branding, and implementation budget.
3. Produce 3 to 4 intentionally divergent directions. Do not make minor variations of the same concept.
4. For each direction, explain:
   - The product posture.
   - What it optimizes for.
   - What it sacrifices.
   - What user feedback would decide.
5. If useful and cheap, create a mock artifact: standalone HTML, local route, Storybook story, screenshot, or design spec. Do not wire real data unless the user approves the direction.
6. Ask one decision question focused on direction, not implementation minutiae.

## Output Template

```markdown
# Design Directions: <surface>

Shared constraints:
- ...

| Direction | Best for | Tradeoffs | Veto signal | Feedback needed |
| --- | --- | --- | --- | --- |
| 1. ... | ... | ... | ... | ... |
| 2. ... | ... | ... | ... | ... |
| 3. ... | ... | ... | ... | ... |

Recommended next probe:
- ...

Question:
Which direction is closest to the product feel you want?
```

## Direction Ideas

Use only directions that fit the product. Examples:

- Dense operational console.
- Guided workflow.
- Visual review workspace.
- Executive summary dashboard.
- Quiet enterprise settings surface.
- Consumer-grade exploratory interface.

## Done When

- The user can reject or combine directions.
- Each direction implies different concrete implementation choices.
- The next step is a mock, direct implementation, or one high-impact follow-up question.
