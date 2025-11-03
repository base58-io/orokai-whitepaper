---
sidebar_label: Network Architecture
sidebar_position: 2
custom_edit_url: null
---

# Network Architecture

## Architectural Considerations

### Option A — L1 PoS (e.g., Cosmos SDK ecosystem)

:::tip[Advantages]

Flexible fee model (gas), fast finality, own MEV policy, straightforward network tokenomics.

:::

> Challenges: building and maintaining validator set, own bridge to other ecosystems.

### Option B — L2 rollup (e.g., OP Stack / zk-rollup)

:::tip[Advantages]

Native EVM compatibility, inherited L1 finality/security, simpler connectivity with EVM DeFi.

:::

> Challenges: cost dependency on L1, partially inherited MEV policy, sequencer specifics.

## Decision Factors

Final choice depends on: target throughput, transaction cost, compatibility with existing integrations, MEV policy, and on-/off-ramp path.

:::tip[Design flexibility]

Both architectures support OROKAI's core requirements – the choice will be driven by optimal balance of cost, performance, and ecosystem compatibility.

:::