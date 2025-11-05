---
sidebar_label: User Profile
sidebar_position: 2
custom_edit_url: null
---

# User Profile (Goals, Preferences, Risk Tolerance)

## Profile Scope (User-Declared)

### Goals
Capital preservation / passive income / LST/LRT exposure / cross-chain diversification.

### Time horizon and liquidity
No lock-up / acceptable lock-up / flexible exit.

### Risk preferences
Conservative / balanced / opportunistic (with limits).

### Experience level
Outside web3 / beginner / advanced (affects explanation depth).

### Operational preferences
Settlement currency (e.g., USDT), basket of chains/protocols, max number of steps, fee constraints.

## How Profile Building Works: Step-by-Step

The AI Agent's recommendations are only as good as the profile data it receives. Here's how OROKAI builds a comprehensive user profile **while keeping it simple**:


> Profile building journey (5-10 minutes)

### STEP 1: Goals (Choose 1-3)
```
What do you want to achieve with DeFi?
┌─────────────────────────────────────────────────────────────────────┐
│ [ ] Capital Preservation                                            │
│     → Focus on stable protocols, minimize risk                      │
│     → Example: Lending stablecoins to AAVE                          │
│                                                                     │
│ [ ] Passive Income                                                  │
│     → Regular rewards, predictable yields                           │
│     → Example: Staking ETH via Lido                                 │
│                                                                     │
│ [ ] Capital Growth                                                  │
│     → Higher APY targets, accept more volatility                    │
│     → Example: Providing liquidity to DEX pools                     │
│                                                                     │
│ [ ] Diversification                                                 │
│     → Spread across multiple chains/protocols                       │
│     → Example: 40% staking, 30% lending, 30% LP                     │
│                                                                     │
│ [ ] Explore DeFi                                                    │
│     → Learning mode, smaller amounts, guided experience             │
│     → Example: Start with $100-500 across 2-3 protocols             │
└─────────────────────────────────────────────────────────────────────┘

Your selection: [Passive Income] ✓
```

### STEP 2: Risk tolerance (Slider + Examples)
``` 
How much risk are you comfortable with?

┌─────────────────────────────────────────────────────────────────────┐
│  Conservative    Balanced    Opportunistic                          │
│  ◀────────────────●──────────────────────▶                          │
│  Low Risk        Medium       Higher Risk                           │
│                                                                     │
│  Your position: Balanced                                            │
│                                                                     │
│  What this means:                                                   │
│  ✓ Willing to accept some volatility for better returns            │
│  ✓ Mix of established + newer protocols (vetted)                   │
│  ✓ Some lock-up periods acceptable (< 30 days)                     │
│  ⚠️ Understand APY can fluctuate 10-20%                             │
│                                                                     │
│  Example protocols at this level:                                   │
│  • Lido stETH (established, liquid)                                 │
│  • AAVE lending (blue-chip, variable APY)                           │
│  • Rocket Pool rETH (decentralized, slightly newer)                 │
└─────────────────────────────────────────────────────────────────────┘
```

### STEP 3: Time horizon
``` 
How long do you plan to keep funds deployed?

┌─────────────────────────────────────────────────────────────────────┐
│ ( ) Short-term (< 3 months)                                         │
│     → Need flexibility, no lock-ups                                 │
│     → May prioritize liquidity over max APY                         │
│                                                                     │
│ (●) Medium-term (3-12 months)                                       │
│     → Can accept some lock-up for better rates                      │
│     → Balanced approach                                             │
│                                                                     │
│ ( ) Long-term (1+ years)                                            │
│     → Maximize compounding, comfortable with lock-ups               │
│     → Lower transaction frequency = lower gas costs                 │
└─────────────────────────────────────────────────────────────────────┘

Your selection: Medium-term (3-12 months) ✓
```

### STEP 4: Liquidity preferences
``` 
How important is it to withdraw anytime?

┌─────────────────────────────────────────────────────────────────────┐
│ ( ) Must be instant (liquid tokens only)                            │
│     → stETH, rETH, aTokens - can swap anytime                       │
│     → May accept slightly lower APY for flexibility                 │
│                                                                     │
│ (●) Flexible (some queue/delay acceptable)                          │
│     → Can wait 1-7 days for unstaking if needed                     │
│     → Opens more protocol options                                   │
│                                                                     │
│ ( ) Committed (lock-up for higher returns)                          │
│     → Willing to lock for 30-90 days for better APY                 │
│     → Example: Fixed-term lending, governance staking               │
└─────────────────────────────────────────────────────────────────────┘

Your selection: Flexible ✓
```

### STEP 5: Chain & asset preferences 

``` 
Which blockchains and assets do you prefer?

┌─────────────────────────────────────────────────────────────────────┐
│ Preferred Chains: (Select 1-3)                                      │
│ [✓] Ethereum      [✓] Polygon      [ ] BNB Chain                    │
│ [ ] Solana        [ ] Base         [ ] Cosmos                       │
│                                                                     │
│ Preferred Assets: (Select 1-5)                                      │
│ [✓] ETH           [✓] USDC         [✓] USDT                         │
│ [ ] BTC (wrapped) [ ] MATIC        [ ] SOL                          │
│                                                                     │
│ 💡 TIP: More options = more diversification but also more complexity│
└─────────────────────────────────────────────────────────────────────┘

Your selections: Ethereum, Polygon | ETH, USDC, USDT ✓
```

### STEP 6: Operational constraints

``` 
Any operational preferences or limits?

┌─────────────────────────────────────────────────────────────────────┐
│ Max Gas Cost per Transaction:                                       │
│ ( ) No limit   (●) $20   ( ) $10   ( ) Custom: $_____               │
│                                                                     │
│ Max Steps in One Flow:                                              │
│ ( ) No limit   (●) 5 steps   ( ) 3 steps   ( ) 1 step only          │
│                                                                     │
│ Rewards Settlement Preference:                                      │
│ (●) Auto-convert to USDT (when cost-effective)                      │
│ ( ) Keep in native tokens (I'll convert manually)                   │
│ ( ) Re-stake automatically (compound)                                │
│                                                                     │
│ Exposure Limits (per protocol):                                     │
│ ( ) No limit   (●) Max 50% in one protocol   ( ) Max 30%            │
└─────────────────────────────────────────────────────────────────────┘

Your selections saved ✓
```

### STEP 7: Experience level (Auto-detected + Declared)

``` 
How would you describe your DeFi experience?

┌─────────────────────────────────────────────────────────────────────┐
│ (●) New to DeFi                                                      │
│     → UI will show more explanations and warnings                   │
│     → Recommendations lean conservative                             │
│     → Step-by-step guidance enabled                                 │
│                                                                     │
│ ( ) Some experience (used 1-3 protocols)                            │
│     → Balanced explanations and freedom                             │
│     → Recommendations include intermediate options                  │
│                                                                     │
│ ( ) Advanced (used 5+ protocols, understand risks)                  │
│     → Minimal hand-holding, advanced features enabled               │
│     → Recommendations include cutting-edge protocols                │
└─────────────────────────────────────────────────────────────────────┘

Your selection: New to DeFi ✓
```

:::tip[NOTE] 

OROKAI also monitors your behavior:
   • Frequency of transactions → adjust complexity recommendations
   • Types of protocols used → expand/narrow suggestions
   • Response to risk warnings → refine risk scoring

:::


> PROFILE COMPLETE!

```
Your Profile Summary:
┌─────────────────────────────────────────────────────────────────────┐
│ Goals:              Passive Income                                  │
│ Risk Tolerance:     Balanced                                         │
│ Time Horizon:       Medium-term (3-12 months)                       │
│ Liquidity Need:     Flexible (some delays OK)                       │
│ Chains:             Ethereum, Polygon                                │
│ Assets:             ETH, USDC, USDT                                  │
│ Max Gas:            $20 per transaction                              │
│ Max Steps:          5 steps per flow                                 │
│ Rewards:            Auto-convert to USDT                             │
│ Exposure Limit:     50% max per protocol                             │
│ Experience:         New to DeFi                                      │
└─────────────────────────────────────────────────────────────────────┘

[View Recommendations] [Adjust Profile] [Advanced Settings]
```

---

### How AI Uses Your Profile (Behind the Scenes)
```
┌─────────────────────────────────────────────────────────────────────┐
│              AI DECISION-MAKING PROCESS                             │
└─────────────────────────────────────────────────────────────────────┘

Your Input                  →  AI Processing                 →  Output
═══════════════════════════════════════════════════════════════════════

Goals: Passive Income       →  Filter: Protocols with       →  Include:
                               regular reward emissions        Lido, AAVE
                                                               Exclude:
                                                               One-time LP

Risk: Balanced             →  Risk Score Range:             →  Include:
                               40-70 (on 0-100 scale)          Established
                               Exclude: <30 or >80             Exclude:
                                                               Experimental

Horizon: 3-12 months       →  Lock-up Filter:               →  Include:
                               0-30 days acceptable            Flexible
                               Penalize: >60 days              Exclude:
                                                               Long-term

Liquidity: Flexible        →  Exit Mechanism Check:         →  Include:
                               Must have DEX liquidity         Liquid LSTs
                               OR unstake queue <7 days        Exclude:
                                                               Illiquid

Chains: ETH, Polygon       →  Network Filter:               →  Show only:
                               Display only these chains       ETH + Polygon
                               Hide: others                    Hide: Solana

Assets: ETH, USDC, USDT    →  Asset Filter:                 →  Match:
                               Match input assets              ETH staking
                               OR can convert via DEX          USDC lending

Max Gas: $20               →  Cost Filter:                  →  Exclude:
                               Estimate total cost             Polygon if
                               If ETH gas >$20, suggest        gas too high
                               alternative chain               

Max Steps: 5               →  Complexity Filter:            →  Prioritize:
                               Count: approve+swap+stake       Direct stake
                               Penalize: >5 steps              Deprioritize:
                                                               Multi-bridge

Rewards: Auto → USDT       →  Settlement Preference:        →  Calculate:
                               Add DEX swap cost               Break-even
                               Only suggest if cost-eff.       Show warning

Exposure: 50% max          →  Allocation Constraint:        →  Suggest:
                               Recommend 2-3 protocols         Diversified
                               Split capital accordingly       40-30-30

Experience: New            →  Explanation Level:            →  Add:
                               Verbose tooltips                Tooltips
                               Risk warnings prominent         Warnings
                               Suggest smaller test amt.       Guide mode

═══════════════════════════════════════════════════════════════════════

FINAL AI OUTPUT (Example):
┌─────────────────────────────────────────────────────────────────────┐
│ Top 3 Recommendations:                                              │
│                                                                     │
│ 1. Lido stETH (Ethereum) - 50% allocation                           │
│    ✓ Matches: Passive income, Balanced risk, Flexible liquidity    │
│    APY: 3.2% │ Cost: $14.50 │ Steps: 3 (approve-swap-stake)        │
│                                                                     │
│ 2. AAVE USDC Lending (Polygon) - 30% allocation                     │
│    ✓ Matches: Passive income, Lower gas, Instant withdrawal        │
│    APY: 4.1% (variable) │ Cost: $2.20 │ Steps: 2 (bridge-deposit)  │
│                                                                     │
│ 3. AAVE ETH Lending (Ethereum) - 20% allocation                     │
│    ✓ Matches: Diversification, Same chain as #1                    │
│    APY: 2.8% │ Cost: $11.30 │ Steps: 2 (approve-deposit)           │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Dynamic Profile Adaptation

Your profile isn't static. AI learns from your behavior and market conditions:
```
┌─────────────────────────────────────────────────────────────────────┐
│           PROFILE ADAPTATION TRIGGERS                               │
└─────────────────────────────────────────────────────────────────────┘

USER BEHAVIOR SIGNALS:
═══════════════════════════════════════════════════════════════════════

1. You consistently ignore "higher APY" options
   → AI: Shift recommendations toward stability/security
   → Update: Risk tolerance lowered to "Conservative"

2. You've completed 10+ transactions without issues
   → AI: Enable more advanced features
   → Update: Experience level → "Intermediate"

3. You always choose Ethereum despite higher gas
   → AI: Deprioritize other chains in recommendations
   → Update: Chain preference → "ETH strongly preferred"

4. You manually convert rewards to USDT every time
   → AI: Suggest enabling auto-convert
   → Update: Settlement preference → "Auto-USDT"


MARKET CONDITION SIGNALS:
═══════════════════════════════════════════════════════════════════════

1. Ethereum gas spikes to >$50 per transaction
   → AI: Temporarily boost Polygon/Base in recommendations
   → Message: "Consider Polygon: same protocols, 95% lower gas"

2. Protocol X has security incident
   → AI: Immediately remove from recommendations
   → Message: "Protocol X quarantined due to incident"

3. New protocol passes 90-day vetting period
   → AI: Add to suggestions if matches profile
   → Message: "New option available: Protocol Y"

4. Your staked protocol's APY drops 30%
   → AI: Notify + suggest alternatives
   → Message: "APY dropped to 2.2%. Migrate to Protocol Z (3.1%)?"

```

:::warning[IMPORTANT]

All adaptations are SUGGESTIONS. You can accept, ignore, or manually override anytime. AI cannot execute changes without your signature.

:::


## Profile Mechanics

### Declarative configuration
UI-based setup (checkboxes, sliders, limits).

### Security policies
Hard limits on exposure per protocol/chain (e.g., allow-list), least-privilege principle for smart contract permissions.

### Privacy
Profile data is used for personalization and does not authorize the Agent to execute transactions; processing in accordance with Privacy Policy.

## Module Output

**"Profile Card"** displaying: goals → risk level → preferred chains → constraints → settlement currency.

:::tip[User control]

The profile serves purely as input for recommendations – the Agent never acts autonomously, and all transactions require explicit user signature.

:::