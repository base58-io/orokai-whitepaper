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

Click "Why this?" on any recommendation to see the detailed scoring:
```
┌─────────────────────────────────────────────────────────────────────┐
│              SCORING BREAKDOWN: Recommended Strategy                │
│                    (Transparent AI Decision)                        │
└─────────────────────────────────────────────────────────────────────┘

Factor                          Weight    Score    Contribution
═══════════════════════════════════════════════════════════════════════

GOAL ALIGNMENT
Passive Income Match            25%       92/100   → +23.0 pts
(Regular yields, low maintenance)

RISK ALIGNMENT
Risk Score vs. Profile          20%       88/100   → +17.6 pts
Target: 40-70 | Actual: 55
(Lido:45, AAVE:60, Weighted:55)

DIVERSIFICATION
Protocol Diversity              15%       85/100   → +12.8 pts
(2 protocols, 3 positions, 2 chains)

LIQUIDITY
Exit Flexibility                15%       90/100   → +13.5 pts
(All liquid, max 7-day withdrawal)

COST EFFICIENCY
Setup Cost vs. Capital          10%       95/100   → +9.5 pts
($28 gas on $10K = 0.28%)

EXPERIENCE MATCH
Complexity vs. User Level       10%       82/100   → +8.2 pts
(9 steps, 2 protocols = beginner-friendly)

YIELD POTENTIAL
APY vs. Market Average          5%        70/100   → +3.5 pts
(3.4% APY, market avg: 3.8%)

═══════════════════════════════════════════════════════════════════════
TOTAL SCORE:                              88.1/100
═══════════════════════════════════════════════════════════════════════

Confidence Level: HIGH ✓
- 5 out of 7 factors scored >85/100
- Strong match to your declared profile
- Established protocols with track record

Alternative Rankings:
1. ⭐ Balanced Income Mix      88.1/100 (YOU ARE HERE)
2.    Higher Yield (More Risk) 78.5/100 (risk penalty)
3.    Ultra-Conservative       72.3/100 (diversification penalty)


═══════════════════════════════════════════════════════════════════════
                        🔍 ASSUMPTION CHECK
═══════════════════════════════════════════════════════════════════════

This recommendation assumes:
✓ Ethereum gas remains <40 gwei (currently: 25 gwei)
✓ Protocol APYs don't drop >30% from current levels
✓ You're comfortable with 70% exposure to ETH price movements
✓ No major security incidents in Lido or AAVE

If any of these change significantly, AI will alert you and suggest
adjustments. You can also manually trigger re-evaluation anytime.

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