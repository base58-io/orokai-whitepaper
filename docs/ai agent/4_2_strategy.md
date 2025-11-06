---
sidebar_label: Protocol and Strategy
sidebar_position: 3
custom_edit_url: null
---

# Protocol and Strategy Recommendations (Tilting, Diversification)

## Recommendation Logic (High Level)

### Protocol filtering
Filter by allow-list of protocols (staking/LST, lending, DEX), according to <mark>quality criteria</mark> (audit, liquidity, incident history).

### Profile matching
Map goals/risk to strategy classes (e.g., LST staking vs. variable pools).

### Tilting/diversification
Propose allocation ranges (brackets) across multiple strategies/chains instead of single-bet, with per-protocol limits.

### Costs and operations
Estimate number of steps (approve, swap, bridge, stake) and costs (gas, slippage, DEX fees).

### Explainability Dashboard: How AI Scored Each Option

Click "Why this?" on any recommendation to see the detailed scoring.

:::tip[SCORING BREAKDOWN]

> GOAL ALIGNMENT           25%      


> RISK ALIGNMENT         20%     



> DIVERSIFICATION         15%       


> LIQUIDITY            15%       


> COST EFFICIENCY       10%       


> EXPERIENCE MATCH     10%       


> YIELD POTENTIAL         5%  

:::     

## Recommendation Presentation in UI

### Options list
"<mark>Proposals</mark> matching your profile" with risk tags and estimated setup cost.

### Explainability
"Why am I seeing this?" – 2–3 key reason codes (e.g., "conservative profile," "short horizon," "USDT preference").

### Confidence and alternatives
Confidence/uncertainty range + 1–2 alternatives with similar parameters.

### No "best execution"
<mark>Agent does not guarantee best price</mark>; we display cost sources and risks, not a final verdict.

## User Control

### Edit allocations
Sliders, exclude strategies, set max gas cost and slippage limits.

### "Prepare Transactions" button
Generates a set of operations for independent signature.

:::warning[User decision required]

Recommendations are informational suggestions, not instructions. Every allocation decision and transaction signature remains entirely under user control.

:::