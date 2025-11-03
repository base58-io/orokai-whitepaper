---
sidebar_label: Monitoring and Adaptation
sidebar_position: 4
custom_edit_url: null
---

# Monitoring and Adaptation (Learning from User Data)

## Monitored Signals (Examples)

### Position status
On-chain state, claim statuses, deviations from target allocations, position maintenance costs.

### Protocol changes
Reward/APR parameters, limits, warnings, contract versions.

### Operational risk
Bridge/chain alerts, DEX anomalies (e.g., liquidity, MEV-sensitive routes).

## Adaptation (Principles)

### Rebalancing/migration proposals
Agent <mark>informs</mark> about significant changes (e.g., rewards drop below threshold, increased protocol risk) and prepares alternatives.

### Notification modes
In-app + optional email/push (where available).

### Human-in-the-loop
No changes occur automatically; user accepts and signs transactions.

## Data and Privacy Note

Learning encompasses usage metrics and user choices; <mark>it does not include sensitive data beyond necessary scope.</mark> Data may be aggregated/anonymized to improve recommendation quality; policy compliant with Privacy Policy document.

:::tip[Transparent learning]

The AI Agent learns from user interactions to provide better suggestions over time, but never acts autonomously – all decisions require explicit user approval.

:::