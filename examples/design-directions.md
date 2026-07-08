# Design Directions: Review Dashboard

Shared constraints:

- Used daily by operations users.
- Must compare many records quickly.
- Existing design system favors compact tables and restrained color.

| Direction | Best for | Tradeoffs | Veto signal | Feedback needed |
| --- | --- | --- | --- | --- |
| Dense review console | High-volume triage | Less friendly for new users | "Feels too spreadsheet-like" | Are expert users the primary audience? |
| Guided exception workflow | Reducing missed actions | Slower for bulk review | "Too many clicks" | Is accuracy more important than speed? |
| Evidence-first workspace | Audit-heavy decisions | More screen space per record | "Too much detail upfront" | Do reviewers need proof before action? |

Recommended next probe:

- Create a static mock for the dense console and evidence-first workspace using
  ten realistic review records.

Question:

Which direction is closest to the product feel you want: speed-first triage,
guided review, or evidence-first audit?
