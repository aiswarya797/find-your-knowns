# Blindspot Pass

## Purpose

Surface unknown unknowns before implementation starts, especially in unfamiliar codebase areas or high-blast-radius work.

## Use When

- The agent has not inspected this module before.
- The request sounds simple but touches auth, billing, permissions, data migrations, security, privacy, infrastructure, or public APIs.
- The user asks for a plan and the codebase may contradict it.
- The cost of discovering constraints late is high.

## Inputs To Gather First

- User request and stated constraints.
- Relevant directories, files, tests, migrations, schemas, docs, configs, feature flags, and API contracts.
- Recent git history if available and useful.
- Existing issues, TODOs, comments, or failing tests if they are local and cheap to inspect.

## Procedure

1. Restate the apparent map in one or two sentences.
2. Inspect the territory before speculating. Use the host's available search, file-read, test, and documentation tools. In a shell-capable environment, targeted `rg` searches are a good default. Keep the probe cheap.
3. Identify hidden constraints in these categories:
   - Entry points and ownership boundaries.
   - Data invariants and migrations.
   - Security, authz, privacy, compliance, and audit behavior.
   - Async jobs, queues, retries, caches, and idempotency.
   - External services, webhooks, rate limits, and operational runbooks.
   - UI states, accessibility, localization, and design-system expectations.
   - Test gaps, brittle fixtures, and previous reverted attempts.
4. Rank risks by impact, not by how interesting they are.
5. Convert each risk into a next action: inspect, test, ask, mock, or defer with a recorded assumption.
6. End with a better follow-up prompt that would give an implementation agent the missing context.

## Output Template

```markdown
# Blindspot Pass: <scope>

Map:
- User asked for: ...
- Known constraints: ...

Territory inspected:
- ...

Likely hidden constraints:
| Risk | Evidence | Impact | Next action |
| --- | --- | --- | --- |
| ... | ... | High/Med/Low | Inspect/test/ask/mock/defer |

Codebase areas to inspect next:
- ...

Domain concepts the user may be missing:
- ...

Prompt upgrade:
> ...
```

## Done When

- Each high-impact unknown has evidence or is clearly marked as a hypothesis.
- The next action is concrete.
- The agent knows whether to proceed, ask one question, or route to another playbook.

## Common Mistakes

- Listing generic risks with no evidence from the repo.
- Asking many questions before performing cheap inspection.
- Treating an unknown as a blocker when a reversible conservative default is available.
