<p align="center">
  <img src="assets/logo.svg" width="112" height="112" alt="Finding Your Unknowns logo">
</p>

<h1 align="center">Finding Your Unknowns</h1>

<p align="center">
  <strong>AI coding agent skill for blindspot discovery, implementation planning, and pre-merge understanding.</strong>
</p>

<p align="center">
  <a href="#install">Install</a> |
  <a href="#workflows">Workflows</a> |
  <a href="#examples">Examples</a> |
  <a href="#license">License</a>
</p>

## What This Is

`finding-your-unknowns` is a Markdown-first agent skill for Claude Code, OpenAI Codex, Cursor, and other skill-aware coding agents.

It helps agents find hidden requirements before they guess: unfamiliar codebase constraints, vague product taste, risky API or data decisions, plan-vs-reality drift, reviewer objections, and merge-time understanding gaps.

The package uses one router skill plus focused reference workflows. The router lives at `skills/finding-your-unknowns/SKILL.md`; each workflow is loaded only when relevant.

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

Clone the repository:

```bash
git clone https://github.com/aiswarya797/finding-your-unknowns.git
```

For skill-folder hosts, copy the skill directory:

```bash
mkdir -p "<agent-skills-dir>"
cp -R "finding-your-unknowns/skills/finding-your-unknowns" "<agent-skills-dir>/"
```

For instruction-only agents, load:

```text
skills/finding-your-unknowns/SKILL.md
```

For repo-local use, keep this repository in your project and invoke:

```text
Use the workflow at finding-your-unknowns/skills/finding-your-unknowns before planning this feature.
```

## Examples

```text
Use finding-your-unknowns. I need to add passkey login, but I have not worked in this auth module before.
```

```text
Use finding-your-unknowns. Make this dashboard feel cleaner and more production-ready, but show me directions before wiring anything.
```

```text
Use finding-your-unknowns. Recreate the retry semantics from vendor/rate-limiter in our TypeScript client, but prove you understood the reference first.
```

```text
Use finding-your-unknowns. The migration plan assumed one account per workspace, but the schema allows many.
```

```text
Use finding-your-unknowns. Explain this branch before merge and quiz me on the risks.
```

## Package Layout

```text
finding-your-unknowns/
  README.md
  LICENSE
  assets/
    logo.svg
  skills/
    finding-your-unknowns/
      LICENSE
      SKILL.md
      references/
        <focused workflows loaded by SKILL.md>
```

## Attribution

Inspired by Thariq Shihipar's "A Field Guide to Fable: Finding Your
Unknowns" and the companion examples:

- [Article](https://x.com/trq212/status/2073100352921215386)
- [Companion examples](https://thariqs.github.io/html-effectiveness/unknowns/)

This package is an original agent workflow. Credit the framework when producing reusable artifacts; do not copy source text.

## License

MIT. See [LICENSE](LICENSE).
