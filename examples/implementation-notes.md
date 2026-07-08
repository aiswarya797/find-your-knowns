# Implementation Notes: Workspace Migration

## 2026-07-08 10:20 - Schema Allows Many Accounts Per Workspace

Planned assumption:

- Migration plan assumed one account belongs to one workspace.

Observed reality:

- `accounts.workspace_id` is many-to-one and no unique index prevents multiple
  accounts per workspace.

Evidence:

- `db/schema.sql`: index on `workspace_id`, no uniqueness constraint.
- `tests/workspaces/account-membership.test.ts`: creates two accounts in one workspace.

Decision:

- Do not collapse accounts during migration. Add a join table and migrate
  account memberships explicitly.

Why this default is conservative/reversible:

- It preserves existing data shape and avoids destructive merges.
- A later uniqueness rule can be added after product confirmation.

Follow-up needed:

- Ask product whether multi-account workspaces are supported or accidental.
