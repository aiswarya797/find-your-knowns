# Install Find Your Knowns

Use the full skill when your agent supports skills. Use the instruction file
directly when it does not.

## Claude Code

Copy the skill folder into your Claude Code skills directory:

```bash
git clone https://github.com/aiswarya797/find-your-knowns.git
mkdir -p ~/.claude/skills
cp -R find-your-knowns/skills/find-your-knowns ~/.claude/skills/
```

Then ask Claude Code:

```text
Use find-your-knowns before planning this feature.
```

## OpenAI Codex Or Manual Skill Loading

Copy the skill folder into your Codex skills directory, or keep the repo checked
out and point Codex at the router skill:

```bash
git clone https://github.com/aiswarya797/find-your-knowns.git
mkdir -p ~/.codex/skills
cp -R find-your-knowns/skills/find-your-knowns ~/.codex/skills/
```

Manual prompt:

```text
Load find-your-knowns/skills/find-your-knowns/SKILL.md and use it to route this task.
```

## Cursor

Cursor does not need a special package format. This repo includes an optional
rule at `.cursor/rules/find-your-knowns.mdc`.

Project-local setup:

```bash
git clone https://github.com/aiswarya797/find-your-knowns.git
mkdir -p .cursor/rules skills
cp find-your-knowns/.cursor/rules/find-your-knowns.mdc .cursor/rules/
cp -R find-your-knowns/skills/find-your-knowns skills/
```

Then in Cursor chat:

```text
Use the Find Your Knowns rule before implementation.
```

## Instruction-Only Agents

For agents without skills or rules, paste or attach:

```text
skills/find-your-knowns/SKILL.md
```

When a task is vague, unfamiliar, design-heavy, reference-based, or high-risk,
ask the agent to run Find Your Knowns before planning or coding.

## Quick Check

After install, this prompt should route to the blindspot workflow:

```text
Use find-your-knowns. I need to add passkey login, but I have not worked in this auth module before.
```
