# Mock Before Wire

## Purpose

Validate product shape before committing to backend, API, state, or data architecture.

## Use When

- UX is uncertain but implementation would require real integration work.
- The user needs to react to layout, states, copy, data density, or interaction flow.
- The team is tempted to design the API before understanding the surface.
- A throwaway mock is cheaper than undoing wired code.

## Procedure

1. Define the mock boundary clearly: what is fake, what is realistic, and what must not touch production systems.
2. Inspect adjacent UI patterns and data shapes if they exist.
3. Create a mock-only artifact using fake but realistic data. Choose the cheapest format:
   - Standalone HTML when no app context is needed.
   - Local component/story/fixture when existing styling matters.
   - Static screenshot/spec when interactivity is unnecessary.
4. Include representative states:
   - Empty.
   - Loading.
   - Error.
   - Typical data.
   - Edge data with long labels, missing values, or permissions.
5. List decisions still needed before wiring real systems.
6. Ask for approval on shape before implementation.

## Output Template

```markdown
# Mock Before Wire: <feature>

Artifact:
- Path or URL: ...

Mock boundary:
- Fake: ...
- Real/reused: ...
- Not touched: ...

Realistic data assumptions:
- ...

States covered:
- ...

Decisions before wiring:
| Decision | Why it matters | Default if user is unavailable |
| --- | --- | --- |
| ... | ... | ... |

Next step:
- ...
```

## Quality Bar

- The mock should let the user react to the actual workflow, not a decorative approximation.
- Fake data should resemble the production domain enough to reveal layout and edge cases.
- The mock should be disposable unless the user explicitly asks to turn it into production code.
