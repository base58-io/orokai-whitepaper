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

### Monitoring Signals: What AI Watches
```
MONITORED SIGNALS & ALERT THRESHOLDS

CATEGORY: YIELD PERFORMANCE


Signal                          Threshold    Alert Type    Urgency
─────────────────────────────────────────────────────────────────────
APY drop (your protocol)        >10%         Warning       Medium
APY drop (your protocol)        >25%         Critical      High
Alternative APY advantage       >0.5%        Opportunity   Low
Reward accrual stopped          24h          Error         High
Claimable rewards available     >$50         Reminder      Low


CATEGORY: RISK & SECURITY


Protocol security incident      Any          Critical      Immediate
Audit downgrade                 Any          Warning       High
TVL drop                        >30% in 7d   Warning       Medium
Smart contract upgrade          Any          Info          Low
Exploit in similar protocol     Any          Warning       Medium
Your position near liquidation  LTV >75%     Critical      Immediate


CATEGORY: COST OPTIMIZATION


Gas price below average         <-30%        Opportunity   Low
Gas price spike                 >2x avg      Warning       Medium
Bridge congestion/high fees     >$50         Warning       Low
DEX slippage increased          >1%          Warning       Medium


CATEGORY: MARKET CONDITIONS


ETH price change                ±10% in 24h  Info          Low
Stablecoin depeg                >1%          Critical      Immediate
LST/LRT depeg                   >2%          Warning       High
High volatility period          VIX spike    Info          Low


CATEGORY: PORTFOLIO HEALTH


Allocation drift from target    >15%         Rebalance     Low
Single protocol exposure        >60%         Warning       Medium
Idle funds (no yield)           >$1000       Opportunity   Low
Approval expiring soon          <30 days     Reminder      Low
Lock-up period ending           <7 days      Reminder      Low


CATEGORY: NEW OPPORTUNITIES


New protocol passed vetting     Any          Opportunity   Low
Higher yield strategy available >0.7% adv.   Opportunity   Low
Incentive program launched      Matches you  Opportunity   Medium
Better liquidity option         -50% slipp.  Opportunity   Low


```

USER CONTROLS:
- Adjust thresholds per signal type
- Disable specific alert types
- Set quiet hours (no notifications 10pm-8am)
- Choose delivery method (in-app / email / push / none)
- Snooze alerts for specific positions (7/30/90 days)

### Adaptation: How AI Learns From You
```
┌─────────────────────────────────────────────────────────────────────┐
│              AI BEHAVIORAL LEARNING EXAMPLES                        │
└─────────────────────────────────────────────────────────────────────┘

SCENARIO 1: User consistently ignores high-risk suggestions
─────────────────────────────────────────────────────────────────────
AI Observes:
- 5 consecutive "high APY" alerts dismissed
- User only accepts suggestions with risk score <60

AI Adapts:
✓ Lower risk tolerance in profile: Balanced → Conservative
✓ Stop showing protocols with risk >65
✓ Increase weight of "stability" factor in scoring
✓ Notify user: "We've adjusted to show more conservative options"


SCENARIO 2: User always waits for lower gas
─────────────────────────────────────────────────────────────────────
AI Observes:
- User snoozed 4 migration alerts
- All executed when gas <15 gwei

AI Adapts:
✓ Raise gas threshold trigger: Only alert when <15 gwei (vs <25)
✓ Add "Set gas alert" feature suggestion
✓ Estimate longer wait times in recommendations
✓ Prioritize gas savings over immediate opportunity


SCENARIO 3: User prefers Ethereum despite higher costs
─────────────────────────────────────────────────────────────────────
AI Observes:
- User rejected 3 Polygon suggestions (lower gas)
- Always chooses Ethereum alternatives

AI Adapts:
✓ Update chain preference: Ethereum = "Strongly Preferred"
✓ Deprioritize Polygon in recommendations
✓ Only suggest Polygon if advantage >2% APY (vs 0.5%)
✓ Assume user values Ethereum security over cost savings


SCENARIO 4: User loves auto-compound features
─────────────────────────────────────────────────────────────────────
AI Observes:
- User manually re-stakes rewards 10+ times
- Always enables "auto-compound" when available

AI Adapts:
✓ Prioritize protocols with native auto-compound
✓ Suggest setting up automated claim→re-stake flows
✓ Calculate and highlight compound APY (vs. simple APY)
✓ Recommend vaults (Yearn-style) that auto-compound


SCENARIO 5: User responds quickly to critical alerts
─────────────────────────────────────────────────────────────────────
AI Observes:
- User acted within 30 min on 2 security warnings
- Avg response time to opportunities: 3 days

AI Adapts:
✓ Mark user as "Responsive to Critical"
✓ Enable push notifications for security alerts (not opportunities)
✓ Use urgent language only for true critical events
✓ Batch non-urgent suggestions into weekly digest


═══════════════════════════════════════════════════════════════════════

IMPORTANT PRINCIPLES:
✓ AI learns FROM you, not FOR you (you stay in control)
✓ All adaptations are transparent (you can see what changed)
✓ You can override AI's learned preferences anytime
✓ No action ever executes without your signature
```


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