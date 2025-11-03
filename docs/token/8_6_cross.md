---
sidebar_label: Cross-Chain Integrations
sidebar_position: 7
custom_edit_url: null
---

# Cross-Chain Integrations and DEX-First Routing

## Integration Architecture

### Bridges/communication

Integrations exclusively from allow-list (e.g., CCTP/Wormhole/LayerZero), with alert mechanisms and limits.

### DEX-first

Exchanges occur on external DEX, and OROKAI prepares the route and displays costs before signing (without "best execution" claims).

### Routing

Internal steps (batch/coordination) on OROKAI Chain; allocation/claims on protocols' native networks.

:::tip[Security through selection]

Allow-list approach ensures only battle-tested, audited bridges and DEX are used, minimizing cross-chain risk exposure.

:::