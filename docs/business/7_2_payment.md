---
sidebar_label: Payment Cards
sidebar_position: 3
custom_edit_url: null
---

# Payment Cards & Fiat Operations

:::warning[Key Principle]
OROKAI never touches fiat money. Partners (V Plus Pay, Stripe, Onramper) handle all fiat transactions. OROKAI earns fees for software integration, UX, and orchestration — not for payment processing or money transmission.
:::


## Payment Cards

OROKAI partners with **V Plus Pay** (cards.vpluspay.hk) to offer crypto-funded payment cards. This is a significant revenue stream as card usage generates recurring, predictable fees.

### Partnership Structure: V Plus Pay

#### Who does what:

| Responsibility | V Plus Pay (Partner) | OROKAI |
|----------------|---------------------|--------|
| **Card issuance** | Issues physical/virtual cards | Software integration only |
| **Payment processing** | PCI DSS compliance, transaction routing | No access to card data |
| **KYC/AML** | Identity verification, sanctions screening | Only UI for user onboarding |
| **Regulatory compliance** | Licensed payment processor | Software provider |
| **Fiat settlement** | Merchant payouts, currency conversion | Never touches fiat |
| **Cardholder support** | Card-specific issues (lost/stolen, disputes) | App integration support |
| **Fee collection** | Deducts from transaction amount | Receives revenue share |

> V Plus Pay is the <mark>regulated financial institution.</mark> 
>
> OROKAI is the <mark>technology platform.</mark> Clear separation reduces regulatory burden on OROKAI.

:::tip[fee]
The base fee is 2.5% (2.2% goes to the provider/0.3% goes to OROKAI).
:::

### Volume-Based Fee Tiers

As user's monthly card spending increases, **V Plus Pay's fee decreases** (standard industry practice). **OROKAI's 0.3% remains constant**.

**Example Tier Structure (Indicative):**

| Monthly Card Volume | V Plus Pay Fee | OROKAI Fee | Total Fee | User Savings vs Base |
|---------------------|----------------|------------|-----------|---------------------|
| $0 - $5,000 (Base) | 2.2%* | 0.3% | **2.5%** | — |
| $5,001 - $20,000 | 2.0%* | 0.3% | **2.3%** | 8% savings |
| $20,001 - $50,000 | 1.8%* | 0.3% | **2.1%** | 16% savings |
| $50,001 - $100,000 | 1.6%* | 0.3% | **1.9%** | 24% savings |
| $100,000+ | 1.4%* | 0.3% | **1.7%** | 32% savings |

**Notes:**
- Exact tier thresholds determined by V Plus Pay and subject to change
- OROKAI 0.3% is **fixed** regardless of volume
- [EDITABLE-CARD-TIERS: Volume thresholds and V Plus rates TBD by partner]

**Why OROKAI fee doesn't decrease:**
- Our costs (infrastructure, wallet integration, support) are **per-transaction**, not volume-dependent
- 0.3% is already competitive vs alternatives (see comparison below)
- Revenue consistency important for operations and development

### Strategic Importance of Cards

#### Why cards are a key revenue focus:

> **Recurring Revenue:** Users spend regularly (daily/weekly) vs one-time swaps

> **User Stickiness:** Card in Apple/Google Pay → daily touchpoint

> **Network Effects:** More users → better volume tiers → more attractive

> **Cross-Sell:** Card users likely to use other OROKAI features (staking, swaps)

> **Brand Visibility:** Physical cards with OROKAI branding = marketing

> **Data Insights:** Spending patterns inform AI recommendations (privacy-compliant)

**Goal:** Cards become **primary use case** that drives daily engagement, with DeFi features as value-add for yield generation.

:::warning[Partner-dependent terms]

Card-related fees and revenue sharing depend on partner agreements and local regulations – specific terms may vary by jurisdiction.

:::

## On/Off-Ramp Fees

### Fee Structure

Fiat ↔ crypto conversions provide **entry and exit** liquidity for users. Lower margin than cards, but critical for user acquisition.

:::tip[fee]
**OROKAI Fee:** [EDITABLE-FEE-ONRAMP: 0.3%] on crypto purchased/sold
:::

**OROKAI Positioning:**
- More expensive than CEX (but non-custodial + no CEX account needed)
- Competitive with direct fiat on-ramps (Coinbase, Moonpay)
- **Key value:** Funds go directly to <mark>>your wallet,</mark> not exchange custody

### Revenue Model: Volume-Driven

On/off-ramp revenue depends on:

> Monthly Revenue = (On-ramp Volume × 0.3%) + (Off-ramp Volume × 0.3%)
```
Example Scenarios:

Low adoption: 10,000 users × $200 avg on-ramp = $2M volume/month
├─ OROKAI revenue: $6,000/month ($72k/year)

Medium adoption: 100,000 users × $500 avg = $50M volume/month
├─ OROKAI revenue: $150,000/month ($1.8M/year)

High adoption: 500,000 users × $1,000 avg = $500M volume/month
├─ OROKAI revenue: $1.5M/month ($18M/year)

Key metrics:
├─ Monthly On-Ramp Users (MORU)
├─ Average On-Ramp Amount (AORA)
├─ On-Ramp Frequency (times/user/month)
└─ Off-Ramp Rate (% of users who cash out)
```

**Growth Drivers:**
- New user acquisition (card marketing, partnerships)
- Geographic expansion (more countries via Onramper)
- Lower partner fees (makes OROKAI more attractive vs CEX)
- Improved UX (more payment methods)

### Why 0.3% On/Off-Ramp Fee?

OROKAI provides significant value for 0.3%:
> Multi-Provider Integration
   - Maintain APIs with Stripe, Onramper, others
   - Automatic failover (Stripe → Onramper if unavailable)
   - Real-time status monitoring

> Seamless UX
   - Embedded widgets (no redirect to external site)
   - Pre-filled wallet addresses (prevent errors)
   - Transaction tracking and notifications

> Wallet Orchestration
   - Ensure funds delivered to correct network
   - Network validation (prevent wrong chain errors)
   - Gas management for delivery transactions

> Support & Dispute Resolution
   - Interface with partner support
   - Transaction troubleshooting
   - Refund coordination (when applicable)

> Compliance Assistance
   - Geo-restriction enforcement
   - Sanctions screening coordination
   - Regulatory reporting (when required)

OROKAI's 0.3% is value for **convenience and safety**.

**For detailed user flows (how cards and on/off-ramp work), see:**
[Section How it works: On-ramp / off-ramp](/docs/journey/5_2_on-ramp)