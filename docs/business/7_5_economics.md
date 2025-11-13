---
sidebar_label: Unit Economics
sidebar_position: 6
custom_edit_url: null
---

# Unit Economics

Unit economics define the <mark>profitability per user</mark> and overall path to sustainable business. This section models OROKAI's revenue and costs at the user level, identifies key profitability levers, and projects break-even scenarios.

## Revenue structure per user (simplified model)

### Basic Formula

Unit Profit = ARPU (Average Revenue Per User) - CAC (Customer Acquisition Cost) - CPS (Cost Per Service)

Where:
- ARPU = Average monthly revenue generated per active user
- CAC = One-time cost to acquire the user (marketing, onboarding)
- CPS = Ongoing monthly cost to serve the user (infrastructure, support)

Profitability achieved when:
Unit Profit > 0 (over user lifetime)

### ARPU: Average Revenue Per User

ARPU varies significantly based on user type and activity level.

### ARPU Components (Monthly)

> ARPU Sources:
- On-chain operations (swaps, bridges, migrations)
- Staking automation (auto-claim fees)
- Card transactions (spending)
- On/off-ramp (fiat conversions)
- Gas markup (all transactions)

> Formula:
ARPU = Σ (Activity_i × Fee_i × Frequency_i)

> Where:
- Activity_i = Type of operation (swap, stake, card, etc.)
- Fee_i = OROKAI's fee for that operation
- Frequency_i = How often user performs that operation per month

### User Segments & ARPU Tiers

#### Segment 1: Casual User (Inactive)
```
Profile:
├─ Signed up, did initial on-ramp
├─ Holds crypto but doesn't transact
├─ No card usage, no staking
└─ Maybe 1-2 swaps per year

Monthly Activity:
├─ Swaps: 0.1/month × $5 fee = $0.50
├─ Card: $0
├─ Staking: $0
├─ On-ramp: $0 (already onboarded)
└─ Gas markup: ~$0.10

ARPU: $0.60/month or $7.20/year

Frequency: ~40% of users (dormant/inactive)
```

#### Segment 2: Basic User (Low Activity)
```
Profile:
├─ Occasional swaps (testing waters)
├─ Small staking position (manual claim)
├─ Rare card usage
└─ Checks app monthly

Monthly Activity:
├─ Swaps: 2/month × $5 fee = $10
├─ Card: $200 spend × 0.3% = $0.60
├─ Staking: Manual (gas only) = $0.30
├─ On-ramp: $0
└─ Gas markup: ~$2

ARPU: $12.90/month or $154.80/year

Frequency: ~30% of users
```

#### Segment 3: Active User (Moderate Activity)
```
Profile:
├─ Regular swaps (portfolio rebalancing)
├─ Moderate staking ($10k-50k TVL)
├─ Card as secondary spending method
└─ Checks app weekly

Monthly Activity:
├─ Swaps: 8/month × $8 fee = $64
├─ Card: $1,000 spend × 0.3% = $3
├─ Staking (auto-claim): $50/month rewards × 8% = $4
├─ Bridge: 1/quarter (÷3) = $1.67
└─ Gas markup: ~$8

ARPU: $80.67/month or $968/year

Frequency: ~20% of users
```

#### Segment 4: Power User (High Activity)
```
Profile:
├─ Daily trader/rebalancer
├─ Large staking position ($100k-500k TVL)
├─ Card as primary spending method
├─ Active in affiliate program
└─ Uses AI automation features

Monthly Activity:
├─ Swaps: 30/month × $10 fee = $300
├─ Card: $5,000 spend × 0.3% = $15
├─ Staking (auto-claim): $500/month rewards × 8% = $40
├─ Bridge: 2/month × $5 = $10
├─ Migration: 1/quarter (÷3) = $7
└─ Gas markup: ~$35

ARPU: $407/month or $4,884/year

Frequency: ~8% of users
```

#### Segment 5: Whale (Institutional/HNW)
```
Profile:
├─ Multi-million TVL ($1M+)
├─ Frequent large transactions
├─ Card for business expenses
├─ Complex strategies (migrations, cross-chain)
└─ Dedicated account management

Monthly Activity:
├─ Swaps: 50/month × $50 fee (larger sizes) = $2,500
├─ Card: $20,000 spend × 0.3% = $60
├─ Staking (auto-claim): $10,000/month rewards × 8% = $800
├─ Bridge: 5/month × $20 = $100
├─ Migration: 2/month × $50 = $100
└─ Gas markup: ~$150

ARPU: $3,710/month or $44,520/year

Frequency: ~2% of users
```
### Blended ARPU Calculation

```
Weighted Average ARPU (100,000 total users):

├─ Casual (40%): 40,000 users × $0.60 = $24,000/month
├─ Basic (30%): 30,000 users × $12.90 = $387,000/month
├─ Active (20%): 20,000 users × $80.67 = $1,613,400/month
├─ Power (8%): 8,000 users × $407 = $3,256,000/month
└─ Whale (2%): 2,000 users × $3,710 = $7,420,000/month

Total Monthly Revenue: $12,700,400
Blended ARPU: $127/month or $1,524/year

Note: This is GROSS revenue before affiliate payouts
```
### CAC: Customer Acquisition Cost
#### Acquisition Channels & Costs
```
Channel 1: Affiliate Program (Primary)
├─ Upfront CAC: $0 (pay only on revenue)
├─ Ongoing cost: ~15% of user's revenue (lifetime)
├─ Effective CAC (amortized over Year 1): $195 per user
└─ Best for: Scalable, predictable growth

Channel 2: Paid Advertising (Google/Meta)
├─ Upfront CAC: $80-$150 per signup
├─ Conversion rate: 30-50% (signup → first transaction)
├─ Effective CAC: $160-$300 per active user
├─ Ongoing cost: $0 (one-time)
└─ Best for: Rapid growth spurts, geographic expansion

Channel 3: Content Marketing (SEO/Blog)
├─ Upfront CAC: $20-$40 per signup (amortized content costs)
├─ Conversion rate: 50-60% (high intent traffic)
├─ Effective CAC: $33-$80 per active user
├─ Ongoing cost: Minimal (content evergreen)
└─ Best for: Long-term sustainable growth

Channel 4: Partnerships (B2B/Integrations)
├─ Upfront CAC: Variable ($0-$50k per partnership)
├─ Per-user CAC: $10-$50 (depends on partner size)
├─ Conversion rate: 60-80% (pre-qualified users)
├─ Effective CAC: $13-$83 per active user
└─ Best for: Institutional/whale acquisition

Channel 5: Organic/Viral (Word of Mouth)
├─ Upfront CAC: $0
├─ Ongoing cost: Product quality + support
├─ Effective CAC: $5-$15 per user (support/infra only)
└─ Best for: Long-term, compound growth
```

**Blended CAC (Target Mix):**
```
Acquisition Mix (Year 1-2):
├─ Affiliate: 60% of users → $195 × 0.60 = $117
├─ Paid Ads: 20% of users → $230 × 0.20 = $46
├─ Content: 10% of users → $57 × 0.10 = $5.70
├─ Partnerships: 5% of users → $48 × 0.05 = $2.40
└─ Organic: 5% of users → $10 × 0.05 = $0.50

Blended CAC: $171.60/user

Note: This is one-time cost (except affiliate, which is ongoing %)
```
### CPS: Cost Per Service (Monthly)
**Ongoing costs to serve each user:**

### Infrastructure Costs (Variable)
```
Per Active User Per Month:

RPC/Indexing:
├─ Multi-chain RPC calls: ~10,000 calls/month
├─ Cost: $0.0001-0.0003 per call
└─ Monthly: $1-$3 per user

Data Storage:
├─ Transaction history, wallet state, analytics
├─ ~50 MB per user per month
└─ Monthly: $0.10-$0.30 per user

CDN/Hosting:
├─ App delivery, static assets
└─ Monthly: $0.20-$0.50 per user

Monitoring/Observability:
├─ Logs, metrics, traces
└─ Monthly: $0.15-$0.40 per user

Total Infrastructure (Variable): $1.45-$4.20 per user/month
Average: ~$2.50/user/month
```
### Support Costs (Variable)
```
Customer Support:

Casual/Basic Users (70% of users):
├─ Rare support tickets (~0.1 ticket/month)
├─ Cost per ticket: $5 (automated + tier-1)
└─ Monthly: $0.50/user

Active/Power Users (28% of users):
├─ Moderate support (~0.5 ticket/month)
├─ Cost per ticket: $8 (tier-1 + some tier-2)
└─ Monthly: $4/user

Whale Users (2% of users):
├─ High-touch support (~2 tickets/month)
├─ Cost per ticket: $15 (tier-2 + dedicated)
└─ Monthly: $30/user

Blended Support Cost:
├─ 70% × $0.50 = $0.35
├─ 28% × $4 = $1.12
└─ 2% × $30 = $0.60
──────────────────────
Total: ~$2.07/user/month
```
### Fixed Costs (Allocated Per User)
```
Fixed Monthly Costs (Total):
├─ Engineering/Product: $150,000
├─ Security/Audits: $50,000
├─ Compliance/Legal: $30,000
├─ Admin/Operations: $20,000
└─ Marketing (Brand): $50,000
──────────────────────
Total Fixed: $300,000/month

Allocated Per User (100,000 users):
$300,000 ÷ 100,000 = $3/user/month

At Scale (500,000 users):
$300,000 ÷ 500,000 = $0.60/user/month

Note: Fixed costs don't scale linearly; economies of scale improve margin
```
### Total CPS (Cost Per Service)
```
Per Active User Per Month:

Variable Costs:
├─ Infrastructure: $2.50
├─ Support: $2.07
└─ Subtotal: $4.57

Fixed Costs (allocated):
└─ $3.00 (at 100k users)

Total CPS: $7.57/user/month at 100k scale
Total CPS: $5.17/user/month at 500k scale (economies of scale)
```
### Segment-Level Profitability

**Which user types are profitable?**

| Segment | ARPU (net) | CAC (Y1 amortized) | CPS | Unit Profit | Profitable? |
|---------|------------|-------------------|-----|-------------|-------------|
| **Casual** | $0.60 | $14.30 | $7.57 | **-$21.27** | (loss leader) |
| **Basic** | $12.90 | $14.30 | $7.57 | **-$8.97** | (marginal) |
| **Active** | $80.67 | $14.30 | $7.57 | **+$58.80** | (profitable) |
| **Power** | $407 | $14.30 | $7.57 | **+$385.13** | (highly profitable) |
| **Whale** | $3,710 | $14.30 | $30 | **+$3,665.70** | (extremely profitable) |

**Insights:**

1. **Casual/Basic users are unprofitable in Year 1**
   - But: They may convert to Active/Power over time (LTV matters)
   - Strategy: Minimize CAC for these segments (affiliate-first, not paid ads)

2. **Active users are the sweet spot**
   - 20% of users generate 30% of profit
   - Focus acquisition on this segment

3. **Power/Whale users drive profitability**
   - 10% of users generate 70% of profit
   - High-touch service justified (worth $30/month CPS for whales)

## Profitability Levers
### Lever 1: Increase ARPU
```
Strategies:
├─ Encourage higher activity (push notifications, gamification)
├─ Upsell premium features (auto-claim, AI strategies)
├─ Increase card usage (marketing, rewards)
├─ Cross-sell (if user only swaps, introduce staking)
└─ Launch new revenue streams (subscriptions, API access)

Impact:
├─ +10% ARPU → +$10.80/user/month
└─ Total profit: $103.3M → $116.3M (+12.6%) ✅

Feasibility: Medium (requires product development + marketing)
```
### Lever 2: Reduce CAC
```
Strategies:
├─ Shift from paid ads → affiliate program (lower CAC)
├─ Improve content SEO (organic traffic)
├─ Referral incentives (viral growth)
├─ Partnerships (qualified leads at lower cost)
└─ Improve conversion funnel (reduce dropoff)

Impact:
├─ -20% CAC ($171 → $137) → -$2.86/user/month
└─ Total profit: $103.3M → $106.7M (+3.3%) ✅

Feasibility: High (operational improvements)
```
### Lever 3: Reduce CPS (Infrastructure)
```
Strategies:
├─ Negotiate better RPC/cloud rates (volume discounts)
├─ Optimize RPC usage (caching, batch calls)
├─ Self-host critical infrastructure (vs SaaS)
├─ Automate support (AI chatbot, better docs)
└─ Scale fixed costs over more users (grow user base)

Impact:
├─ -20% CPS ($7.57 → $6.06) → +$1.51/user/month
└─ Total profit: $103.3M → $121.4M (+17.5%) ✅

Feasibility: High (engineering + scale)
```
### Lever 4: Improve User Mix (Segment Shift)
```
Strategy:
├─ Target Active/Power/Whale users in marketing
├─ Qualify leads (discourage casual signups)
├─ Nurture Casual → Basic → Active (onboarding, education)
└─ Retain high-value users (dedicated support, perks)

Impact (shift mix from 40/30/20/8/2 to 30/25/25/15/5):

Before:
├─ Blended ARPU: $107.95/month

After:
├─ Casual (30%): 30% × $0.60 = $0.18
├─ Basic (25%): 25% × $12.90 = $3.23
├─ Active (25%): 25% × $80.67 = $20.17
├─ Power (15%): 15% × $407 = $61.05
└─ Whale (5%): 5% × $3,710 = $185.50
──────────────────────
New Blended ARPU: $270.13/month (+150%!) ✅✅

Total profit: $103.3M → $315M (+205%) ✅✅✅

Feasibility: Medium (requires targeted acquisition + retention)
```
### Lever 5: Reduce Churn (Increase Lifetime)
```
Current Assumption: User lifetime = 24 months average

Churn Reduction Strategies:
├─ Improve onboarding (reduce early dropoff)
├─ Engagement features (notifications, insights)
├─ Loyalty rewards (token discounts, gamification)
├─ Network effects (affiliate ties users together)
└─ Switching costs (integrated into DeFi routines)

Impact:
├─ Increase lifetime 24 → 36 months (+50%)
├─ LTV increases proportionally
├─ More aggressive CAC viable (ROI still positive)
└─ Total profit grows as cohorts mature

Churn Rate Targets:
├─ Year 1: 30% (industry standard)
├─ Year 2: 20% (improving)
└─ Year 3+: 10% (mature, sticky users)

Feasibility: Medium (product + community building)
```
## Sensitivity Analysis
**How do key variables affect profitability?**
```
Base Case (100k users):
├─ ARPU: $107.95/month
├─ CAC: $171.60 (Y1 amortized: $14.30/month)
├─ CPS: $7.57/month
└─ Unit Profit: $86.08/month → $103.3M/year total

Sensitivity Table:

Variable: ARPU (±20%)
├─ -20% ($86/month): Unit profit = $63.73 → $76.5M/year (-26%)
├─ Base ($108/month): $103.3M
└─ +20% ($130/month): Unit profit = $108.43 → $130.1M/year (+26%)

Variable: CAC (±20%)
├─ -20% ($137): Unit profit = $88.94 → $106.7M/year (+3.3%)
├─ Base ($172): $103.3M
└─ +20% ($206): Unit profit = $83.22 → $99.9M/year (-3.3%)

Variable: CPS (±20%)
├─ -20% ($6.06): Unit profit = $87.59 → $105.1M/year (+1.7%)
├─ Base ($7.57): $103.3M
└─ +20% ($9.09): Unit profit = $84.56 → $101.5M/year (-1.7%)

Variable: User Mix (shift to Power/Whale)
├─ Current mix: $103.3M
├─ Improved mix (+10% Power/Whale): $180M/year (+74%)
└─ Whale-heavy mix (double Whale %): $250M/year (+142%)

Variable: Scale (user count)
├─ 50k users: CPS $9.57 → Unit profit $83.08 → $49.8M/year total
├─ 100k users (base): $103.3M
├─ 500k users: CPS $5.17 → Unit profit $88.48 → $531M/year
└─ 1M users: CPS $4.57 → Unit profit $89.08 → $1.07B/year
```
### Path to Profitability
**Timeline & Milestones:**
```
Month 0-6 (Launch):
├─ Users: 0 → 10,000
├─ Revenue: $0 → $1.1M/month
├─ Costs: High fixed + CAC investment
├─ Status: Unprofitable (expected)
└─ Burn Rate: -$500k/month (funded by raise)

Month 7-12 (Product-Market Fit):
├─ Users: 10,000 → 50,000
├─ Revenue: $1.1M → $5.4M/month
├─ Costs: Fixed improving, CAC scaling efficiently
├─ Status: Approaching break-even
└─ Burn Rate: -$100k/month → Break-even

Month 13-24 (Growth):
├─ Users: 50,000 → 150,000
├─ Revenue: $5.4M → $16.2M/month
├─ Costs: Economies of scale kicking in
├─ Status: Profitable ✅
└─ Monthly Profit: +$5M/month (30% margin)

Month 25-36 (Scale):
├─ Users: 150,000 → 500,000
├─ Revenue: $16.2M → $54M/month
├─ Costs: Strong economies of scale
├─ Status: Highly Profitable ✅✅
└─ Monthly Profit: +$25M/month (46% margin)

Year 4+ (Maturity):
├─ Users: 500,000 → 1M+
├─ Revenue: $54M+ → $100M+/month
├─ Status: Market Leader
└─ Annual Profit: $500M - $1B (50%+ margin)
```
### Break-Even Analysis

**At what scale does OROKAI become profitable?**
```
Fixed Costs: $300k/month
Variable Cost Per User: $4.57/month (infra + support)
ARPU (net of affiliates): $107.95/month
CAC (amortized Y1): $14.30/month

Monthly Break-Even:

Fixed Costs ÷ (ARPU - Variable Cost - CAC) = Users Needed
$300,000 ÷ ($107.95 - $4.57 - $14.30) = $300,000 ÷ $89.08 = 3,368 users

Break-Even Point: ~3,400 active users

At 3,400 users:
├─ Revenue: 3,400 × $107.95 = $367k/month
├─ Variable Costs: 3,400 × $4.57 = $15.5k/month
├─ Fixed Costs: $300k/month
├─ CAC (amortized): 3,400 × $14.30 = $48.6k/month
└─ Profit: $367k - $15.5k - $300k - $48.6k = ~$3k/month ✅ (break-even)

Timeline to 3,400 Users:
├─ Aggressive growth: Month 4-5
├─ Moderate growth: Month 6-8
└─ Conservative growth: Month 9-12

Verdict: OROKAI can reach profitability within 4-12 months post-launch
```
### Summary: Unit Economics Health

OROKAI Unit Economics Assessment:

> Strong Blended ARPU: $108/month (healthy vs $50-80 industry avg)

> Manageable CAC: $172 (recoverable in 2 months)

> Low CPS: $7.57 (improves with scale)

> Fast Payback: 2 months (CAC recovered quickly)

> High LTV:CAC Ratio: 6:1 at Year 1 ($1,033 LTV ÷ $172 CAC)

> Scalable: Economies of scale improve margin 30% → 50%+

> Multiple Levers: Can improve profitability via ARPU, CAC, CPS, mix

> Early Break-Even: Profitable at 3,400 users (~Month 4-12)


> Risks:
- Casual/Basic users unprofitable (need to convert or avoid)
- High dependence on Power/Whale users (10% drive 70% profit)
- Affiliate costs permanent 15% drag (but enables growth)
- Churn risk (must maintain 24+ month lifetime)

Verdict: STRONG unit economics with clear path to profitability.

:::tip[Scalability focus]

Unit economics improve with scale – higher volumes drive down per-operation costs while maintaining quality and security standards.

:::