---
sidebar_label: Dependencies and Critical Path
sidebar_position: 5
custom_edit_url: null
---

# Dependencies and Critical Path

## Phase Dependencies

### Sequential

Phase 1 → Phase 2 → Phase 3

Rationale:
- Phase 2 requires stable Phase 1 platform (can't build on broken foundation)
- Phase 3 requires scale from Phase 2 (regulated features need user base)
- Attempting parallel execution = resource waste, technical debt

Overlap Allowed:
- Phase 2 planning can START during Phase 1
- Phase 3 partnerships can be NEGOTIATED during Phase 2

### Feature-Level Dependencies

> Infrastructure
- Blocks: Partner integrations, staking, swaps, UI

> Partner Integrations
- Depends on: Infrastructure complete
- Blocks: Beta launch, public launch

> Beta → Public Launch
- Depends on: Partners ready, audits complete
- Blocks: Phase 2 start

> AI Agent Development
- Depends on: User data from Phase 1 (behavior patterns)
- Blocks: Advanced automation features

> Bridge Integrations
- Depends on: Multi-chain infrastructure stable
- Blocks: Complex cross-chain strategies

> Scale Infrastructure
- Depends on: 50k+ users generating load
- Blocks: Phase 3 readiness

> Regulatory Approvals
- Depends on: Legal opinions, partner agreements
- Blocks: TGE, RWA, securities features

> TGE + Chain Testnet
- Depends on: Token legal clarity
- Blocks: OROKAI Chain mainnet

> Chain Mainnet + Market Leadership
- Depends on: Testnet success, ecosystem readiness
- Blocks: Nothing (Phase 3 complete)

### Non-Critical (Can Happen in Parallel)

> Card integration (parallel with staking development)

> Content marketing (parallel with all technical work)

> Affiliate program design (parallel with Phase 2 features)

> UI/UX improvements (continuous throughout all phases)

> Security audits (start early, run in parallel)

:::tip[Sequential validation]

Each phase builds on validated foundations from the previous phase, ensuring stability and compliance before expanding functionality.

:::