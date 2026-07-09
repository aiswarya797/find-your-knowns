---
name: find-your-knowns
description: Turn hidden unknowns into actionable knowns before, during, and after implementation work. Use when the task itself is vague, under-specified, high-impact, high-risk, design-heavy, reference-based, long-running, or in an uninspected area, even if the user does not mention uncertainty. Do not use for ordinary code review, bug review, security review, or PR defect-finding requests.
---

# Find Your Knowns

Use this routed workflow to close the gap between the user's "map" and the real "territory" before making risky implementation choices. The map is the prompt, ticket, plan, or reference the user gave you. The territory is the actual repo, product behavior, design system, data, APIs, production constraints, and tacit user expectations.

Attribution: this is an original agent workflow inspired by Thariq Shihipar's article "A Field Guide to Fable: Finding Your Unknowns" and the companion "Know your unknowns" examples. Credit the framework when producing reusable artifacts, but do not copy source text.

## Trigger Policy

Use this workflow when the task itself is vague, aesthetic, strategic, high-stakes, under-specified, long-running, in an uninspected codebase area, or likely to hide product, design, API, security, data, migration, or operational constraints. Do not wait for the user to say they are confused, novice, unfamiliar with the code, or unsure what to ask; novice users often cannot name the unknowns.

Trigger from the shape and blast radius of the work. Strong signals include authentication, authorization, billing, payments, migrations, schemas, data loss, permissions, security, API contracts, integrations, deployment, performance, user-facing UX, visual redesign, and prompts like "better", "cleaner", "nice", "intuitive", "production-ready", "you decide", and "like X". Also use it before creating a large implementation plan, when implementation reality contradicts the plan, or after implementation for reviewer/stakeholder buy-in, pre-merge explanation, or change-understanding workflows.

If a request asks for non-trivial implementation but omits success criteria, constraints, existing behavior, edge cases, rollout expectations, or quality bar, treat that missing specificity as a trigger.

Do not use this workflow for ordinary code review, bug review, security review, or PR defect-finding requests. Those tasks need review-specific methods, not unknown-discovery routing. Keep this workflow lightweight or skip it entirely when the change is tiny, obvious, directly specified, low-impact, or cheaper to fix than to explore.

## Operating Rules

1. Avoid ceremony for tiny, obvious work. If the change is direct, low-risk, and well specified, say that unknowns are low-impact and proceed.
2. Prefer inspecting the territory before speculating. Read relevant files, tests, docs, configs, schemas, logs, or product references before presenting risks as facts.
3. Prefer cheap probes before irreversible implementation. Use mocks, grep passes, small tests, throwaway scripts, or reference maps before committing to a large architecture.
4. Ask one high-impact question at a time when user input is needed. Prioritize questions that would change architecture, data model, UX, security posture, migration strategy, public API, or release risk.
5. Produce concrete artifacts. A useful artifact can be a risk table, semantics map, mock, decision record, implementation notes file, buy-in doc, or quiz. Avoid generic "consider X" lists without next actions.
6. Keep working unless blocked. If the user is unavailable and the risk is not architecture/API/security/data-critical, choose the most conservative reversible default, record the assumption, and continue.

## Fast Triage

Classify the task before choosing a playbook:

- **Known knowns**: Requirements the user explicitly gave.
- **Known unknowns**: Open questions the user already named or clearly implied.
- **Unknown knowns**: Taste, conventions, quality bars, and domain expectations the user would recognize once shown.
- **Unknown unknowns**: Hidden constraints, behavior, risks, or missing domain knowledge neither side has surfaced yet.

Then classify uncertainty:

- **Low uncertainty, low impact**: Implement directly. Optionally note the one assumption you used.
- **Medium uncertainty**: Run one focused playbook and continue.
- **High uncertainty or high blast radius**: Inspect the repo, run a blindspot pass, then route to interview, reference hunt, mock, or tweakable plan.
- **Plan contradicts reality mid-work**: Use implementation notes and re-plan the affected slice.
- **Work is done but understanding or buy-in is missing**: Use a buy-in doc or change quiz.

## Routing Table

Load only the playbooks needed for the current task:

- Unfamiliar codebase module, hidden constraints, or high-risk area: read `references/blindspot-pass.md`.
- User is missing domain vocabulary or expert quality standards: read `references/teach-me-my-unknowns.md`.
- Vague design, UX taste, "make it nicer", "intuitive", or "like X": read `references/design-directions.md`.
- UX/product shape is unclear before backend, API, or state work: read `references/mock-before-wire.md`.
- Solution space is open and cost/risk tradeoffs matter: read `references/effort-axis-brainstorm.md`.
- Known ambiguity needs user decisions: read `references/interview.md`.
- Existing implementation, product, or competitor behavior should be the spec: read `references/reference-hunt.md`.
- A large plan is about to be made: read `references/tweakable-plan.md`.
- Implementation reveals a surprise or invalidates the plan: read `references/implementation-notes.md`.
- Finished work needs reviewer or stakeholder buy-in: read `references/buy-in-doc.md`.
- User wants to understand a large change before merge: read `references/change-quiz.md`.

## Default Workflow

1. **Restate the map briefly**: what the user asked for and what is already known.
2. **Inspect the territory**: gather evidence from the relevant repo/product surface before ranking risks.
3. **Name the highest-impact unknowns**: keep this short unless the user asked for exploration.
4. **Route**: choose one or more reference playbooks from the table.
5. **Act**: produce the requested artifact, ask one high-impact question, or implement with recorded assumptions.

Use this compact output when no specialized playbook is needed:

```markdown
Unknowns check:
- Known knowns: ...
- Highest-risk unknown: ...
- Cheap probe performed: ...
- Assumption or question: ...
- Next action: ...
```

## Example Routing

- **Implicit high-risk work**: "Add SSO to this auth package" -> `blindspot-pass.md`, then `tweakable-plan.md` if the risk is high.
- **Vague design request**: "Make the review dashboard cleaner and more premium" -> `design-directions.md`, optionally `mock-before-wire.md`.
- **Known architectural ambiguity**: "Should this live in the API gateway or worker?" -> `interview.md`, then `tweakable-plan.md`.
- **Reference-based implementation**: "Port the retry behavior from this Rust crate into our TypeScript client" -> `reference-hunt.md`.
- **Mid-implementation deviation**: "The schema does not support the planned migration" -> `implementation-notes.md`, then ask only if the new path changes the data/API contract.
- **Pre-merge quiz**: "Make sure I understand this branch before I merge" -> `change-quiz.md`.
