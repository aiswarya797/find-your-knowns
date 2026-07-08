# Change Quiz: Billing Refactor Branch

What changed:

- Billing plan lookup moved from controller helpers into `BillingCatalog`.
- Checkout creation now reads plan metadata from one module.
- Existing webhook handling is unchanged.

Why it changed:

- The old lookup logic was duplicated in three controllers and one job.
- New pricing tiers need one source of truth before rollout.

Affected files/modules:

| Area | Files | Responsibility |
| --- | --- | --- |
| Catalog | `app/billing/catalog.rb` | Plan metadata and lookup |
| Checkout | `app/controllers/checkout_controller.rb` | Builds checkout sessions |
| Jobs | `app/jobs/sync_plan_job.rb` | Syncs plan names |
| Tests | `test/billing/catalog_test.rb` | Catalog behavior |

Key risks:

- Wrong plan ID could send users to the wrong checkout.
- Controller tests may pass while webhook assumptions drift.

Quiz:

1. What is the new source of truth for plan metadata?
2. Which flow was intentionally not changed?
3. Where would you debug if checkout shows the wrong price?
4. What regression should reviewers verify before merge?
5. What makes this refactor safer than editing each controller separately?

Answer key:

1. `BillingCatalog`.
2. Webhook handling.
3. `BillingCatalog` first, then checkout session creation.
4. Existing customers still map to the same plan IDs.
5. One lookup module reduces duplicated pricing logic.
