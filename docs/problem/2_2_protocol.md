---
sidebar_label: Protocol and Network
sidebar_position: 3
custom_edit_url: null
---

# Protocol and Network Fragmentation, Information Dispersion

## Challenges of a Decentralized Ecosystem

### Multiple chains, multiple interfaces

The same strategy classes (staking, lending, LP) exist across different networks and in different contract versions. Parameters, <mark>risks, and costs</mark> vary depending on the chain and protocol.

### Heterogeneous metrics and documentation

APY/APR calculated differently, varying payout schedules and lock-up conditions; information scattered across websites, technical documentation, and social media.

### Rapid changes

Contract updates, new pools, variable limits, and asset lists require <mark>continuous monitoring</mark> – individual users lack the time and tools for this.

## Example

### Same "ETH staking", 5 different experiences

User wants to stake 10 ETH. Protocol comparison:

| Feature | Lido (stETH) | Rocket Pool (rETH) | Coinbase (cbETH) | Native Staking | Binance CEX |
|---------|-------------|-------------------|------------------|----------------|-------------|
| **Min. amount** | 0.01 ETH | 0.01 ETH | 0.0001 ETH | **32 ETH** | 0.0001 ETH |
| **Liquid token?** | Yes (stETH) | Yes (rETH) | Yes (cbETH) | Locked | Custodial |
| **Lock-up period** | None | None | None | ~27 days | Per CEX rules |
| **APY (Nov 2024)** | 3.2% | 3.1% | 2.9% | 3.5% | 3.0% |
| **Protocol fee** | 10% | 5-20% | 25% | 0% (gas only) | Variable |
| **Withdrawal** | Swap stETH or Unstake queue | Swap rETH or Burn | Swap cbETH | Unstake (ETH Phase II) | Instant (custodial) |
| **Smart contract risk** | Medium | Medium-High | Low (Coinbase) | ETH Protocol | Custodial risk |
| **Cross-chain availability** | 10+ networks | 3 networks | 2 networks | Ethereum only | Internal |
| **Gas for approve** | $3-8 | $3-8 | $3-8 | $50-200 (node setup) | $0 (internal) |
| **Gas for stake** | $5-12 | $5-12 | $5-12 | ~$150 | $0 (internal) |
| **Number of steps** | 2 (approve + stake) | 2 (approve + deposit) | 2 (approve + stake) | 20+ (node setup) | 1 (custodial) |
| **Time to first rewards** | ~24h | ~24h | ~24h | ~1 epoch (6.4 min) | Instant |
| **Documentation** | Good | Medium | Good | Technical | Basic |
| **Non-custodial?** | Yes | Yes | Yes | Yes | **NO** |

**Key user question:** <mark>*"Which one should I choose?!"*</mark>

> **Without OROKAI:** 2-4 hours of research on Reddit/Discord/Twitter 

> **With OROKAI:** AI Agent shows 3 options matching your profile (e.g., "Lido – highest liquidity, Rocket Pool – more decentralized, Native – highest APY but 32 ETH min.")

## Problem

### Metametrics – impossibility of "apples-to-apples" comparison

Different protocols use different definitions for the same metrics:

| Term | Definition in Lido | Definition in Rocket Pool | Definition in AAVE |
|------|-------------------|-------------------------|-------------------|
| **APY** | Annualized Percentage Yield (compound daily) | APR (Annual Percentage Rate, simple) | Variable APY (changes per block) |
| **Fee** | 10% of staker rewards | 5-20% depending on operator commission | 0.3% + variable borrow rate spread |
| **Rewards** | Auto-accruing (stETH balance grows) | Mint new rETH (ratio changes) | Claimable incentives (aToken) |
| **Risk** | "Smart contract audited" | "Decentralized operator set" | "Liquidation risk + smart contract risk" |

**Non-technical user:** *"I don't understand the difference between 'accruing' and 'claimable'. I just want to know how much I'll earn."*

## Consequence

Difficulty in comparing strategies "apples to apples," risk of choosing an inadequate protocol or outdated contract version.

:::warning[Risk of outdated information]

The fast-paced nature of DeFi means that strategies and protocols can change rapidly, making it challenging for users to stay informed and make optimal decisions.

:::