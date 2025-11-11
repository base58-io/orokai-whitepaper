---
sidebar_label: On-Chain Transaction Fees
sidebar_position: 2
custom_edit_url: null
---

# On-Chain Transaction Fees

## Fee Structure

### Overview

:::tip[Key Principle] 
Users pay fees <mark>directly to recipients</mark> (liquidity providers, bridge operators, network validators, OROKAI). We never hold funds mid-transaction. Our fees compensate for software orchestration, routing optimization, and infrastructure maintenance.
:::

OROKAI charges fees on four types of on-chain operations:

| Operation Type | Fee Components | OROKAI Revenue |
|----------------|----------------|----------------|
| **DEX Swaps** | LP fee (to pool) + OROKAI routing fee + Gas | [EDITABLE: 25%] of LP fee + [EDITABLE: 10%] gas markup |
| **Staking Rewards** | OROKAI automation fee (optional) + Gas | [EDITABLE: 8%] of claimed + [EDITABLE: 10%] gas markup |
| **Cross-Chain Bridges** | Bridge protocol fee + OROKAI orchestration + Gas (both chains) | [EDITABLE: 50%] of bridge fee + [EDITABLE: 10%] gas markup |
| **Migrations** | Sum of individual step fees (swap + bridge + stake) | Per-step fees as above |

### DEX Swap Fees

:::tip[What user pays]
Total Cost = Swap Amount × LP Fee % + (LP Fee × 25%) + Network Gas × 1.10
:::
```
Example: Swap 1,000 USDC → ETH (Uniswap V3, 0.05% pool)

Fee Breakdown:
Input amount: 1,000 USDC

LP Fee (0.05%): $0.50
├─ Goes to: Uniswap liquidity providers
└─ User pays: $0.50

OROKAI Routing Fee (25% of LP): $0.125
├─ Goes to: OROKAI (software orchestration)
└─ User pays: $0.125

Network Gas: $2.50 (at 0.1 Gwei, Ethereum)
OROKAI Gas Markup (10%): $0.25
├─ Goes to: Validators ($2.50) + OROKAI ($0.25)
└─ User pays: $2.75 total gas

═══════════════════════════════════════════════
TOTAL COST: $0.625 fees + $2.75 gas = $3.375
User receives: ~996.625 USDC worth of ETH
Effective rate: 0.3375%
```

> #### Pool Fee Impact
> 
> Different liquidity pools have different fees. OROKAI routes to the optimal pool balancing 

**Cost vs liquidity**:

| Pool Type | LP Fee | OROKAI Fee (25%) | Total Fees | When Used |
|-----------|--------|------------------|------------|-----------|
| 0.01% pool | $0.10 | $0.025 | $0.125 | Stable pairs (USDC/USDT) |
| 0.05% pool | $0.50 | $0.125 | $0.625 | Common pairs (ETH/USDC) |
| 0.3% pool | $3.00 | $0.75 | $3.75 | Standard pairs |
| 1% pool | $10.00 | $2.50 | $12.50 | Exotic/volatile pairs |

**Gas Cost Variability:**

Swap costs vary dramatically with Ethereum network congestion:

| Network State | Gas Price | Network Gas | OROKAI Markup | Total Gas | Total Swap Cost |
|---------------|-----------|-------------|---------------|-----------|-----------------|
| Very Low (now) | 0.1 Gwei | $0.45 | $0.045 | $0.50 | $1.125 (0.11%) |
| Low | 5 Gwei | $22.50 | $2.25 | $24.75 | $25.375 (2.54%) |
| Normal | 15 Gwei | $67.50 | $6.75 | $74.25 | $74.875 (7.49%) |
| High | 50 Gwei | $225.00 | $22.50 | $247.50 | $248.125 (24.81%) |

### Staking Rewards Fees

:::tip[What user pays]
Claim Fee = Claimed Amount × 8% + Gas × 1.10 (claim tx) + Gas × 1.10 (fee tx)
:::
```
Example: Lido stETH Auto-Claim (1 stETH rewards)

Fee Breakdown:
Claimable rewards: 1 stETH (~$3,000 at $3k/ETH)

Protocol Fee (Lido): Already deducted before accrual (~10%)
├─ This is NOT visible in the 1 stETH
└─ Gross rewards were ~1.11 stETH; Lido took ~0.11 stETH

OROKAI Automation Fee (8%): 0.08 stETH (~$240)
├─ Goes to: OROKAI (for service)
├─ Charged: As separate transaction after claim
└─ User authorized: When enabling claim

Gas (Claim Transaction): $1.50 network + $0.15 markup = $1.65
Gas (Fee Transaction): $1.25 network + $0.12 markup = $1.37

═══════════════════════════════════════════════
TOTAL COST: 0.08 stETH + $3.02 gas
User receives: 0.92 stETH (~$2,760)
Protocol already took: ~0.11 stETH
Net vs gross: 0.92 / 0.11 = 82.8% (protocol + OROKAI fees)
```

### Cross-Chain Bridge Fees

:::tip[What user pays]
Total Bridge Cost = Bridge Protocol Fee + (Protocol Fee × 50%) OROKAI + Swap Fees (source) + Swap Fees (destination) + Gas (source chain) × 1.10 + Gas (dest chain) × 1.10
:::

Bridges are complex because they involve **multiple steps across chains**. 

```
Example: Bridge 1 ETH (Ethereum → Polygon)

Step 1: Swap ETH → USDC (Ethereum)
Step 2: Bridge USDC (Ethereum → Polygon) via CCTP
Step 3: Swap USDC → ETH (Polygon)

Consolidated Fee Summary:

Starting amount: 1 ETH (~$3,000)

All Swap Fees:
├─ Step 1 LP (0.05%): $1.50
├─ Step 1 OROKAI (25%): $0.375
├─ Step 3 LP (0.05%): $1.497
└─ Step 3 OROKAI (25%): $0.374
└─ Swap subtotal: $3.746

Bridge Fees:
├─ CCTP protocol (0.001%): $0.03
└─ OROKAI orchestration (50%): $0.015
└─ Bridge subtotal: $0.045

All Gas (Ethereum + Polygon):
├─ Ethereum network: $1.00 (swap + bridge init)
├─ Ethereum OROKAI markup: $0.10
├─ Polygon network: $0.10 (receive + swap)
└─ Polygon OROKAI markup: $0.11
└─ Gas subtotal: $1.31

═══════════════════════════════════════════════
TOTAL COST: $3.79 fees + $1.31 gas = $5.10
Final received: 0.9983 ETH (~$2,994.90)
Effective cost: 0.17%
```

**Gas Scenario Impact on Bridges:**

Bridges involve transactions on **two chains**, so gas costs compound:

| Ethereum Gas | Eth Gas Cost | Polygon Gas | Total Gas | Total Bridge Cost |
|--------------|--------------|-------------|-----------|-------------------|
| 0.1 Gwei (now) | $1.00 | $0.10 | $1.31 | $5.10 (0.17%) |
| 5 Gwei | $100.00 | $0.10 | $110.11 | $113.90 (3.80%) |
| 30 Gwei | $600.00 | $0.10 | $660.11 | $663.90 (22.13%) |

**Why bridge via USDC?**
- Lower bridge fees for stablecoins (0.001% vs 0.02%+ for wrapped assets)
- CCTP is native USDC (no wrapped intermediary = safer)
- Better liquidity for USDC pairs on both chains

**When Bridging Makes Sense:**

Bridge when:
- Destination chain offers X% better APY (covers bridge cost)
- Gas is low (5 Gwei on Ethereum)
- Position size large enough (bridge cost 1% of position)
- Long-term position (not bridging back soon)

OROKAI will calculate break-even and suggest optimal timing.

### Migration Fees (Multi-Step Operations)

:::tip[What user pays]
Migration Cost = Unstake Gas + Swap Fees + Bridge Fees + Swap Fees + Stake Gas (All with OROKAI fees per step as above)
:::

Migrations are the **most complex** operations, involving up to 6 transactions across 2 chains.

```
Example: Migrate 5 ETH (Protocol A Ethereum → Protocol B Polygon)

Complete Flow:
Step 1: Unstake from Protocol A (Ethereum)
Step 2: Swap ETH → USDC (Ethereum)
Step 3: Bridge USDC (Ethereum → Polygon)
Step 4: Swap USDC → ETH (Polygon)
Step 5: Approve Protocol B (Polygon)
Step 6: Stake in Protocol B (Polygon)

Consolidated Cost Summary:
Starting position: 5 ETH staked (~$15,000)

All Fees:
├─ Swap fees (0.05% pools): $14.995 LP + $3.749 OROKAI
├─ Bridge fees: $0.15 protocol + $0.075 OROKAI
└─ Fee subtotal: $18.97 (0.126%)

All Gas (6 transactions):
├─ Ethereum (3 tx): $1.44 network + $0.13 OROKAI
├─ Polygon (3 tx): $0.54 network + $0.20 OROKAI
└─ Gas subtotal: $2.31

═══════════════════════════════════════════════
TOTAL MIGRATION COST: $21.28 (0.142%)
Final position: 4.9965 ETH staked on Polygon
Time: 20-40 minutes
```

**Gas Impact on Migrations (6 transactions):**

| Ethereum Gas | Total Gas Cost | Total Migration Cost | % of $15k Position |
|--------------|----------------|----------------------|-------------------|
| 0.1 Gwei (now) | $2.31 | $21.28 | 0.14% |
| 5 Gwei | $159.54 | $178.51 | 1.19% |
| 30 Gwei | $951.54 | $970.51 | 6.47% |

**Migration Decision Framework:**

OROKAI helps users decide when migration is worth it.
:::tip[decision]
Migration makes sense when:

Annual Gain > Migration Cost / Months Until Review
:::

```
Example:
- Current APY: 4% on $15k = $600/year
- Target APY: 6% on $15k = $900/year
- Gain: $300/year = $25/month
- Migration cost: $21.28 (at low gas)
- Break-even: <1 month 

If planning to stay >1 month, migration profitable.

OROKAI calculates this automatically and shows:
"Migration pays for itself in X days"
```
### Gas Markup Explained

OROKAI adds a **[EDITABLE: 10%] markup** to all gas estimates. Here's why and how it works:

#### Purpose of Gas Markup:
> Infrastructure Costs
   - RPC node access (multi-provider redundancy)
   - Real-time gas price monitoring
   - Transaction simulation and estimation
   - Failed transaction detection and retry logic

> User Protection
   - Estimates include buffer for price fluctuations
   - Reduces failed transactions (user would pay gas anyway)
   - Pre-flight checks prevent costly errors

> Service Fee
   - Compensates for orchestration, batching, optimization

#### How It Works:
> Step 1: OROKAI estimates real network gas needed
- Queries multiple RPC providers
- Simulates transaction
- Gets current gas price (e.g., 0.1 Gwei)

> Step 2: Calculate total cost
- Gas units needed: 150,000 (for a swap)
- Network cost: 150k × 0.1 Gwei × ETH price = $0.45
- User sees: $0.45 × 1.10 = $0.50 (10% markup included)

> Step 3: User pays total when signing
- $0.45 goes to network validators
- $0.05 goes to OROKAI (service fee)

#### User Transparency:
In the UI, users can **expand gas details**:

#### Gas Optimization Features:
OROKAI doesn't just mark up gas — we help users save:

- **Low Gas Alerts:** Notify when gas drops below average (save 50-90%)  
- **Batch Suggestions:** Combine operations to reduce total tx count  
- **Chain Recommendations:** Suggest L2s when Ethereum gas is high  
- **Timing Optimization:** AI suggests best time windows for operations


## Fee Summary Table

| Operation | OROKAI Fees | Typical Cost Range | When Cost is Low | When Cost is High |
|-----------|-------------|-------------------|------------------|-------------------|
| **Swap** | 25% of LP + 10% gas | $0.50 - $250 | Low gas + 0.05% pool | High gas + 1% pool |
| **Staking (auto)** | 8% of claimed + 10% gas | $6 - $300 | Small claim, low gas | Large claim, high gas |
| **Bridge** | 50% of bridge fee + swap fees + 10% gas | $5 - $700 | Low gas, USDC via CCTP | High gas, wrapped assets |
| **Migration** | Per-step fees (sum) | $20 - $1,000+ | Low gas, L2 destination | High gas, multiple bridges |

:::tip[Transparent fee model]

All fees are disclosed before user authorization – OROKAI monetizes software and infrastructure services, not custody or asset management.

:::