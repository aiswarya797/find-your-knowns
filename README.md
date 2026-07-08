# finding-your-unknowns

`finding-your-unknowns` is a reusable agent workflow package for surfacing hidden uncertainty before, during, and after implementation.

The package is inspired by Thariq Shihipar's "A Field Guide to Fable: Finding Your Unknowns" and the companion "Know your unknowns" examples:

- Article: https://x.com/trq212/status/2073100352921215386
- Companion examples: https://thariqs.github.io/html-effectiveness/unknowns/

The instructions in this package are original and written to be agent-agnostic. The `SKILL.md` frontmatter is included because many skill-aware hosts use it for discovery, but the workflow also works as plain Markdown instructions.

## Structure

```text
know your unknowns/
  README.md
  LICENSE
  skills/
    finding-your-unknowns/
      LICENSE
      SKILL.md
      references/
        <playbooks loaded on demand by SKILL.md>
```

## Installation

Use the integration style your agent host supports:

- **Skill-folder hosts**: copy `skills/finding-your-unknowns/` into the host's skill, workflow, or instruction-library directory. This folder includes its own `LICENSE` so skill-only installs preserve license metadata; attribution is also included in `SKILL.md`.
- **Instruction-only agents**: load `skills/finding-your-unknowns/SKILL.md` as the main instruction document and allow the agent to read files under `references/` on demand.
- **Repo-local usage**: keep this package in the repository and invoke it by path, for example `Use the workflow at know your unknowns/skills/finding-your-unknowns`.
- **Whole-package installs**: copy the full `know your unknowns/` folder when your host supports package-level installation; this preserves the README, package-level LICENSE, skill instructions, and references together.

For hosts that use a local skills directory, the copy command looks like:

```bash
mkdir -p "<agent-skills-dir>"
cp -R "know your unknowns/skills/finding-your-unknowns" "<agent-skills-dir>/"
```

Restart or reload the agent environment if it does not automatically rescan local workflows.

## Usage

Invoke it directly:

```text
Use finding-your-unknowns before planning this feature.
```

It should also trigger for prompts that are vague, strategic, high-stakes, unfamiliar, long-running, design-heavy, reference-based, or contradicted by codebase reality mid-implementation.

## Example Prompts

Pre-implementation, unfamiliar module:

```text
Use finding-your-unknowns. I need to add passkey login, but I have not worked in this auth module before.
```

Pre-implementation, vague design:

```text
Use finding-your-unknowns. Make this dashboard feel cleaner and more production-ready, but show me directions before wiring anything.
```

Pre-implementation, known architecture ambiguity:

```text
Use finding-your-unknowns. I am unsure whether notification fanout belongs in the API request path or the worker queue.
```

Pre-implementation, reference-based implementation:

```text
Use finding-your-unknowns. Recreate the retry semantics from vendor/rate-limiter in our TypeScript client, but prove you understood the reference first.
```

During implementation:

```text
Use finding-your-unknowns. The migration plan assumed one account per workspace, but the schema allows many.
```

Post-implementation:

```text
Use finding-your-unknowns. Explain this branch before merge and quiz me on the risks.
```

## Major Workflow Phases

- **Before implementation**: surface hidden constraints, clarify decision points, compare directions, or validate the shape before irreversible work.
- **During implementation**: keep scoped implementation notes current when repo reality diverges from the plan.
- **After implementation**: package the result for stakeholder understanding, reviewer buy-in, or pre-merge comprehension.

`SKILL.md` is the canonical routing source for the current playbook list and when to load each reference.
