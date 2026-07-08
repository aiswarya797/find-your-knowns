<p align="center">
  <img src="assets/logo.svg" width="112" height="112" alt="Find Your Knowns logo">
</p>

<h1 align="center">Find Your Knowns</h1>

<p align="center">
  <strong>AI coding agent skill for turning hidden unknowns into actionable knowns before implementation.</strong>
</p>

<p align="center">
  <a href="#install">Install</a> |
  <a href="#workflows">Workflows</a> |
  <a href="#examples">Examples</a> |
  <a href="#templates">Templates</a> |
  <a href="#license">License</a>
</p>

## What This Is

`find-your-knowns` is a Markdown-first agent skill for Claude Code, OpenAI Codex, Cursor, and other skill-aware coding agents.

It helps agents find hidden requirements before they guess: unfamiliar codebase constraints, vague product taste, risky API or data decisions, plan-vs-reality drift, reviewer objections, and merge-time understanding gaps.

The package uses one router skill plus focused reference workflows. The router lives at `skills/find-your-knowns/SKILL.md`; each workflow is loaded only when relevant.

## Why Use It

Use this skill when a coding task is vague, unfamiliar, high-stakes, design-heavy, reference-based, long-running, or expensive to redo.

Skip it for tiny direct changes, ordinary code review, bug review, security review, and PR defect-finding. Those need review-specific methods, not unknown-discovery routing.

## Workflows

| Phase | Workflow | Use it for |
| --- | --- | --- |
| Before | Blindspot pass | Hidden constraints in unfamiliar code or domains |
| Before | Teach me my unknowns | Missing vocabulary, standards, and quality criteria |
| Before | Design directions | Divergent UX, product, or visual directions |
| Before | Mock before wire | Throwaway shape validation before real implementation |
| Before | Effort-axis brainstorm | Options ranked by effort, risk, and proof |
| Before | Interview | One high-impact decision question at a time |
| Before | Reference hunt | Preserve behavior from existing code, products, or specs |
| Before | Tweakable plan | Implementation plans ordered by likely user veto |
| During | Implementation notes | Scoped plan-vs-reality decisions during execution |
| After | Buy-in doc | Reviewer and stakeholder understanding |
| After | Change quiz | Pre-merge comprehension of a large change |

## What Makes This Package Different

- Full 11-workflow coverage without requiring interactive HTML artifacts.
- Explicit trigger guard against hijacking normal code review or security review.
- Scoped implementation notes that avoid random repo-root files.
- Skill-folder `LICENSE`, so manual installs preserve license metadata.
- Agent-agnostic Markdown: useful as a formal skill or plain instructions.

## Install

Fast path:

```bash
git clone https://github.com/aiswarya797/find-your-knowns.git
mkdir -p "<agent-skills-dir>"
cp -R "find-your-knowns/skills/find-your-knowns" "<agent-skills-dir>/"
```

Then ask your agent:

```text
Use find-your-knowns before planning this feature.
```

Install details:

- Claude Code, Codex/manual loading, Cursor, and instruction-only agents:
  [docs/install.md](docs/install.md)
- Optional Cursor rule:
  [.cursor/rules/find-your-knowns.mdc](.cursor/rules/find-your-knowns.mdc)

For instruction-only agents, load:

```text
skills/find-your-knowns/SKILL.md
```

For repo-local use, keep this repository in your project and invoke:

```text
Use the workflow at find-your-knowns/skills/find-your-knowns before planning this feature.
```

## Examples

Prompts:

```text
Use find-your-knowns. I need to add passkey login, but I have not worked in this auth module before.
```

```text
Use find-your-knowns. Make this dashboard feel cleaner and more production-ready, but show me directions before wiring anything.
```

```text
Use find-your-knowns. Recreate the retry semantics from vendor/rate-limiter in our TypeScript client, but prove you understood the reference first.
```

```text
Use find-your-knowns. The migration plan assumed one account per workspace, but the schema allows many.
```

```text
Use find-your-knowns. Explain this branch before merge and quiz me on the risks.
```

Sample outputs:

- [Blindspot pass](examples/blindspot-pass.md)
- [Design directions](examples/design-directions.md)
- [Reference hunt](examples/reference-hunt.md)
- [Implementation notes](examples/implementation-notes.md)
- [Buy-in doc](examples/buy-in-doc.md)
- [Change quiz](examples/change-quiz.md)

## Templates

Reusable short templates live in [templates/](templates/):

- [Blindspot pass](templates/blindspot-pass.md)
- [Design directions](templates/design-directions.md)
- [Reference hunt](templates/reference-hunt.md)
- [Implementation notes](templates/implementation-notes.md)
- [Buy-in doc](templates/buy-in-doc.md)
- [Change quiz](templates/change-quiz.md)

## Package Layout

```text
find-your-knowns/
  README.md
  LICENSE
  assets/
    logo.svg
  docs/
    install.md
  examples/
  templates/
  .cursor/rules/
  skills/
    find-your-knowns/
      LICENSE
      SKILL.md
      references/
        <focused workflows loaded by SKILL.md>
```

## Validation

```bash
npm run validate
```

Validation runs markdown lint, stale package-slug checks, and `git diff --check`.

## Attribution

Inspired by Thariq Shihipar's "A Field Guide to Fable: Finding Your
Unknowns" and the companion examples:

- [Article](https://x.com/trq212/status/2073100352921215386)
- [Companion examples](https://thariqs.github.io/html-effectiveness/unknowns/)

This package is an original agent workflow. Credit the framework when producing reusable artifacts; do not copy source text.

## License

MIT. See [LICENSE](LICENSE).
