---
sidebar_label: Rewards Overview
sidebar_position: 4
custom_edit_url: null
---

# Rewards Overview and History

## Tracking and Automation

### "Rewards" view

Aggregate presentation of active positions, accumulated rewards, and upcoming claim windows (per protocol/chain).

### OPTION A: Manual Reward Managment

How it works:
> OROKAI tracks accrued rewards across all your positions

> Dashboard shows "Claimable" amounts

> YOU decide when to claim (no automatic actions)

>  Each claim = separate transaction YOU sign

> Rewards stay in native tokens (e.g., stETH, AAVE)

### OPTION B: Automated claim + convert to USDT/USDC (Optional)

How it works:
> YOU authorize a schedule ONCE (e.g., "weekly" or "monthly")

> OROKAI prepares claim + swap to USDT transactions

> Executed automatically when conditions met (you set thresholds)

> Each execution still uses YOUR wallet signatures (pre-authorized)

> Rewards converted to USDT via DEX (from allow-list)

:::warning[This is NOT custodial automation]
   - Your keys remain on <mark>YOUR</mark> device
   - Each tx uses permission <mark>YOU</mark> granted
   - You can revoke authorization <mark>ANYTIME</mark>
   - <mark>OROKAI</mark> cannot claim without your pre-approval
:::
### History

Every claim/swap/stake reflected in history with costs (gas/fee/slippage) and on-chain links.

:::warning[Variable rewards and conversion risks]

Reward levels are variable; conversion to USDT occurs through DEX with price/slippage risk.

:::

### Key Principles

#### Automation in OROKAI

| Principle | What It Means |
|-----------|---------------|
| **Optional, Never Mandatory** | Manual control is default. Automation is YOUR choice. |
| **Pre-Authorized, Not Automatic** | YOU grant permission once. Each execution uses that permission. |
| **Revocable Anytime** | Disable automation instantly. Revoke permissions in one click. |
| **Cost-Aware** | OROKAI won't execute if gas exceeds your max. Skips expensive periods. |
| **Transparent History** | Every auto-claim logged with cost, result, on-chain link. |
| **Non-Custodial** | Your keys stay on YOUR device. Permissions don't give us custody. |
| **Conditions-Based** | Only executes when YOUR conditions met (min amount, max gas, etc.). |
