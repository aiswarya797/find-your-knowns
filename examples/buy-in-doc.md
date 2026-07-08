# Buy-In Doc: Bulk Invite Flow

Summary:

- Adds CSV-based invites for workspace admins.
- Keeps the existing single-invite flow unchanged.
- Adds validation preview before any email is sent.

Demo or before/after:

- Before: admins invited one teammate at a time.
- After: admins upload CSV, fix invalid rows, then send all valid invites.

What changed:

- New preview endpoint validates emails, roles, and duplicates.
- UI shows accepted, rejected, and already-invited rows.
- Send action only operates on rows accepted by preview.

Decisions made:

| Decision | Reason | Evidence |
| --- | --- | --- |
| Preview before send | Prevents accidental bulk email | `invite-preview.test.ts` covers invalid rows |
| Keep single invite path | Avoids regression in common path | Existing route unchanged |
| Reject unknown roles | Matches current role enum | `roles.ts` has fixed admin/member values |

Alternatives rejected:

- Send first and report failures later: too risky for admin trust.
- Auto-create unknown roles: violates current permission model.

Risks and mitigations:

| Risk | Mitigation | Owner/next step |
| --- | --- | --- |
| Large CSV timeout | Limit preview to 500 rows | Product confirm limit |
| Duplicate invites | Preview flags duplicates | Covered by test |

Reviewer questions pre-answered:

- Emails are not sent during preview.
- Existing invite API remains available.

Decision needed:

- Confirm whether 500 rows is an acceptable first-release limit.
