---
sidebar_label: On-Ramp / Off-Ramp
sidebar_position: 3
custom_edit_url: null
---

# On-Ramp / Off-Ramp with Credit Card

## Partner-Operated Services

### Seamless Entry and Exit

OROKAI makes it easy to move between traditional currency (fiat) and crypto <mark>without requiring a centralized exchange account.</mark> We partner with <mark>licensed payment providers</mark> who handle all fiat transactions, KYC/AML compliance, and card processing — OROKAI is <mark>only the software interface.</mark>

:::warning[Key Principle]
OROKAI <mark>never touches fiat money.</mark> Partners handle all fiat transactions, banking, and regulatory compliance. We connect you to them, but <mark>we are not a payment service provider, money transmitter, or bank.</mark>
:::

## Our On/Off-Ramp Partners

On/Off-Ramp provider hierarchy (Automatic Failover for Global Coverage)

### Primary provider: Stripe

#### Provider:        
> Stripe, Inc. (stripe.com)
#### Licensed (US states):  
> Registered money transmitter 

> PCI DSS Level 1 certified

> Regulated payment processor (global)

#### Coverage:        
Primary availability in:
- United States
- European Union (most countries)
- United Kingdom
- Canada
- Australia
- Other select regions (check Stripe availability)

#### What Stripe Handles:
- Fiat payment processing (card/bank)
- KYC/AML verification (identity checks)
- Transaction monitoring (fraud prevention)
- Regulatory reporting (as required by law)
- Customer support for payment issues
- Crypto custody during on-ramp (brief period)

#### What OROKAI Handles:
- UI/UX integration (embed Stripe widget)
- User preference storage (payment methods, limits)
- Destination wallet management (YOUR self-custody wallet)
- Transaction status tracking (notifications)

#### Assets Supported (via Stripe):
- Major cryptocurrencies: BTC, ETH, USDC, USDT
- Network selection: Ethereum, Polygon, Solana, others
- (Availability varies by region - Stripe determines)

### Fallback provider: Onramper

#### Provider:        
> Onramper (onramper.com)
#### Licensed:  
> Payment aggregator (connects to multiple providers)

> Works with licensed partners in each region

#### Coverage:        
Global (180+ countries):
- Activates when Stripe unavailable in user's region
- Broader geographic reach
- Multiple payment methods per region

#### What Onramper Does:
- Routes to best available licensed provider for user's region
- Aggregates: Mercuryo, MoonPay, Transak, Wyre, others
- Handles regional KYC/AML compliance via partners
- Provides unified API for OROKAI integration

#### Regional Failover Examples:
User in [Region X where Stripe unavailable]
- Onramper routes to Mercuryo (if available)
- User completes KYC with Mercuryo
- Crypto delivered to user's OROKAI wallet

User in [Region Y with payment method not supported by Stripe]
- Onramper routes to Transak (supports local payment method)
- User completes transaction
- Crypto delivered to user's wallet

### Automatic provider selection

> OROKAI detects user's region (IP + declared country)

> Checks Stripe availability for that region

> IF Stripe available:
   - Present Stripe widget (preferred - best UX)
   - User completes transaction via Stripe
> IF Stripe NOT available:
   - Fallback to Onramper widget
   - Onramper selects best available provider
   - User completes transaction via Onramper partner

User sees seamless experience regardless of provider used.

## Fee Structure

### Component 1: Provider fees

#### Stripe Fees (indicative, varies by region/payment method):
- Payment processing: ~2-5% (card-dependent)
- Currency conversion: Included in exchange rate
- Network fees: Blockchain gas (passed through)
- Total typical: 2-5% + network fees

#### Onramper Partner Fees (varies by provider/region):
- Payment processing: ~3-6% (provider-dependent)
- Currency conversion: Included in exchange rate
- Network fees: Blockchain gas (passed through)
- Total typical: 3-6% + network fees

:::tip[NOTE]
Provider fees are set by Stripe/Onramper partners, not OROKAI. We display them clearly but have no control over these rates.
:::

### Component 2: OROKAI Service fees

> On-Ramp: 1.0% of transaction amount

> Off-Ramp: 1.0% of transaction amount

What this covers:
- Software integration and maintenance
- User interface and experience
- Transaction orchestration
- Customer support (OROKAI-side)
- Wallet management and notifications

Applied to: Crypto amount received (on-ramp) or sent (off-ramp)

### Component 3: Network fee

Network fees are the cost of recording transactions on the blockchain and are paid to validators/miners, not to OROKAI or payment providers.

How it works:
- On-Ramp: Gas fee to deliver crypto from provider to YOUR wallet
- Off-Ramp: Gas fee to send crypto from YOUR wallet to provider
- Amount varies by: Network (Ethereum vs Polygon), congestion, transaction complexity
- Displayed in real-time before transaction confirmation

:::warning[disclaimer]
Network fees are NOT controlled by OROKAI or providers — they are determined by blockchain network conditions at the time of transaction.
:::

:::tip[TIP] 
Choose lower-cost networks (Polygon, Solana) for smaller transactions to minimize network fees as a percentage of your purchase/sale.
:::

### Total Cost Example

#### On-Ramp via Stripe

```
User wants to buy: $1,000 USD worth of USDC

Cost Breakdown:

1. Payment to Stripe:          $1,000.00

2. Stripe fees (~3%):          -$30.00
(Card processing + FX)

3. Crypto purchased:           $970.00 worth of USDC
 
4. OROKAI fee (1%):            -$9.70
(1% of $970 crypto)

5. Network fee (gas):          -$2.50
(Delivering USDC to your wallet on Polygon)

─────────────────────────────────────────────────────────────────────
YOU RECEIVE:                    ~$957.80 USDC 
─────────────────────────────────────────────────────────────────────

Total fees: $42.20 (4.22% of $1,000)
 ├─ Provider: $30.00 (3.0%)
 ├─ OROKAI: $9.70 (0.97%)
 └─ Network: $2.50 (0.25%)
```

#### Off-Ramp via Stripe
```
User wants to cash out: 1,000 USDC to bank account

Cost Breakdown:

1. Starting amount:               1,000 USDC

2. OROKAI fee (1%):               -10 USDC
(1% of 1,000 USDC)

3. Amount sent to Stripe:         990 USDC

4. Stripe converts to USD:      ~$990.00
(At current exchange rate)

5. Stripe withdrawal fee:          -$15.00
(Bank transfer fee, varies by method/region)

6. Network fee (gas):                -$2.50
(Sending USDC to Stripe address)

─────────────────────────────────────────────────────────────────────
YOU RECEIVE (in bank):          ~$972.50 USD
─────────────────────────────────────────────────────────────────────

Total fees: $27.50 (2.75% of $1,000)
 ├─ OROKAI: $10.00 (1.0%)
 ├─ Provider: $15.00 (1.5%)
 └─ Network: $2.50 (0.25%)
```

### Cost visibility

Before the user accepts an operation, they see partner fees and network costs (if applicable).

:::tip[Regulated partner integration]

All card and fiat operations are handled by licensed, compliant third-party providers – OROKAI acts solely as the interface layer.

:::

## User Flow

### On-Ramp (Buy Crypto with Card)

> **STEP 1:** User Initiates Purchase

User clicks: [Buy Crypto] in OROKAI dashboard

OROKAI asks:
- How much? [Amount in USD/EUR/GBP/etc.]
- What asset? [ETH / USDC / USDT / BTC / etc.]
- Which network? [Ethereum / Polygon / Solana / etc.]
- Payment method? [Card / Bank Transfer / etc.]

> **STEP 2:** Provider Selection (Automatic)

OROKAI detects:
- User region: [Country]
- Stripe available? → YES
- Route to: Stripe widget

(If Stripe not available → Fallback to Onramper widget)

> **STEP 3:** Fee Disclosure

User must explicitly accept fees before proceeding.

> **STEP 4:** Stripe Widget Opens (Embedded)

Stripe on-ramp widget appears within OROKAI interface.

:::warning[CRITICAL SECURITY]
- Card details entered directly into Stripe's widget
- OROKAI never receives PAN, CVV, or billing info
- PCI DSS compliance handled by Stripe
:::
> **STEP 5:** KYC/AML (If Required by Stripe)

For first-time users or large amounts, Stripe may require:

- Identity verification (government ID)
- Proof of address (utility bill, bank statement)
- Selfie verification (liveness check)
- Source of funds (for large transactions)

This happens within Stripe's flow, not OROKAI.
OROKAI receives status updates (approved/pending/rejected).

> **STEP 6:** Payment Processing

Stripe processes card payment:

Status updates shown in OROKAI:
- Processing payment...
- Payment successful
- Purchasing crypto...
- Crypto purchased, delivering to your wallet...

User can close window; notifications will update when complete.

> **STEP 7:** Crypto Delivery to Your Wallet

Stripe delivers USDC to the wallet address OROKAI provided
(YOUR self-custody wallet address).

OROKAI monitors blockchain for incoming transaction:
- Transaction detected: [TX Hash]
- Status: Pending (waiting for confirmations)
- Status: Confirmed 

> **STEP 8:** Ready to Allocate

User can now:
- View balance in dashboard
- Allocate to DeFi strategies (see Section 5.2)
- Keep in wallet for later
- Buy more crypto

### Off-Ramp (Sell Crypto to Fiat)

> **STEP 1:** User Initiates Sale

User clicks: [Sell Crypto] or [Withdraw to Bank]

OROKAI asks:
- Which asset? [Shows available: USDC, ETH, etc.]
- How much? [Amount in crypto or $ equivalent]
- Network? [Ethereum / Polygon / etc.]
- Destination? [Bank account / Card]

> **STEP 2:** Unstake/Withdraw (If Necessary)

IF crypto is staked in a protocol:
- OROKAI detects: "Your USDC is in AAVE"
- Suggests: "Withdraw from AAVE first"
- Prepares: Unstake flow → Then off-ramp
- User signs: Withdraw transaction

IF crypto is already liquid in wallet:
- Proceed directly to Step 3

> **STEP 3:** Fee Disclosure

Fees are estimates. Final amounts confirmed after conversion.

> **STEP 4:** Prepare Crypto Transfer

OROKAI prepares transaction to send USDC to Stripe's address.

> **STEP 5:** User Signs Transaction

Transaction appears in YOUR wallet (MetaMask, etc.):
- Review: Amount, address, network
- Sign transaction
- Broadcast to blockchain

OROKAI tracks status:
- Transaction pending...
- Confirmed on-chain
- Stripe processing conversion...

> **STEP 6:** Stripe Converts & Transfers

Stripe receives USDC:
- Converts to USD (at current market rate)
- Deducts withdrawal fee
- Initiates bank transfer (ACH/SEPA/etc.)

Timeline:
- Crypto received by Stripe: Immediate (on-chain confirmation)
- USD conversion: Within 1 hour
- Bank deposit: 1-3 business days (depends on bank)

> **STEP 7:** Completion Notification

OROKAI shows updates:
```
Crypto Sent to Stripe
[TX Hash link]

Status: Awaiting bank deposit (1-3 days)
Expected arrival: [Date]

You'll receive a notification when funds arrive in your bank.  
```
When bank transfer completes:
```
Withdrawal Complete!

Received in bank: 
Original amount: 
Total fees: 

[View Receipt] [New Transaction]
```

## Regional Availability & Failover

### Geographic Coverage & Provider Routing


| Region | Primary Provider | Fallback Provider | Coverage Notes |
|--------|-----------------|-------------------|----------------|
| 🇺🇸 United States | Stripe | Onramper | All states* |
| 🇪🇺 European Union | Stripe | Onramper | Most countries |
| 🇬🇧 United Kingdom | Stripe | Onramper | Full support |
| 🇨🇦 Canada | Stripe | Onramper | Full support |
| 🇦🇺 Australia | Stripe | Onramper | Full support |
| 🇯🇵 Japan | Onramper | N/A | Via partners |
| 🇰🇷 South Korea | Onramper | N/A | Via partners |
| 🇸🇦 Saudi Arabia | Onramper | N/A | Via partners** |
| 🇸🇬 Singapore | Stripe | Onramper | Full support |
| Other (180+ countries) | Onramper | N/A | Partner-based |

**Notes:**
- \* Some US states have crypto restrictions (NY, HI, etc.) — Onramper may route to compliant providers
- \** Availability in Saudi Arabia subject to local regulations and Sharia compliance requirements
- Coverage and provider availability may change based on regulatory developments
- OROKAI automatically routes you to the best available provider for your region


:::tip[coverage]
OROKAI's on/off-ramp availability depends on our partner providers' geographic coverage. For the most current regional availability, please check directly with our providers:
- **Stripe Crypto On-Ramp:** [https://docs.stripe.com/crypto/onramp#supported-countries](https://docs.stripe.com/crypto/onramp#supported-countries)
- **Onramper:** [https://onramper.com/supported-countries](https://onramper.com/supported-countries)
:::

### How Failover Works

> User in supported Stripe region:

- OROKAI presents Stripe widget
- Seamless Stripe experience
- Fastest processing

> User in region without Stripe:

- OROKAI automatically routes to Onramper
- Onramper selects best available partner for that region
- May require different KYC process (partner-dependent)
- User completes transaction via partner

## Limits and Compliance

### Limits

> Stripe (Typical Limits):

- Daily: Up to $10,000 USD (varies by verification level)
- Weekly: Up to $25,000 USD
- Monthly: Up to $100,000 USD
- Per transaction: $50 minimum, $10,000 maximum

> Onramper Partners (Varies):

- Depends on selected partner and region
- Typically: $50 - $5,000 per transaction
- May have lower limits for unverified users

:::tip[limits]
Limits are set by providers, not OROKAI. Higher limits available with enhanced KYC verification.
:::

### KYC/AML Requirements

ALL providers require basic information:
- Full name
- Email address
- Country of residence
- Payment method (card/bank)

Enhanced KYC for larger amounts:
- Government-issued ID (passport, driver's license)
- Proof of address (utility bill, bank statement)
- Selfie verification (liveness check)
- Source of funds (for very large transactions)

:::warning[disclaimer]
> KYC is handled by: Stripe or Onramper partners (NOT OROKAI)

> OROKAI receives: Only approval/rejection status

> OROKAI never stores: ID documents, SSN, sensitive personal data
:::

### Prohibited Jurisdictions

> OROKAI on/off-ramp is NOT available in:

- Sanctioned countries (per OFAC/EU sanctions lists)
- Regions where crypto transactions are illegal
- Jurisdictions without licensed provider coverage
- Users on sanctions lists (checked by providers)

:::warning[VPN]
 Using VPN to bypass geographic restrictions is PROHIBITED
and can result in account suspension + funds freeze.
:::

## Key Principles: On/Off-Ramp in OROKAI

| Principle | What It Means |
|-----------|---------------|
| **OROKAI Never Touches Fiat** | All fiat transactions handled by licensed partners (Stripe/Onramper). |
| **Transparent Fees** | All costs shown before transaction. Provider fees + OROKAI 1% fee. |
| **Self-Custody Maintained** | Crypto delivered directly to YOUR wallet. We never hold your crypto. |
| **KYC by Partners** | Identity verification handled by Stripe/Onramper, not OROKAI. |
| **Automatic Failover** | Seamless experience whether using Stripe or Onramper. |
| **PCI DSS Compliant** | Card details never touch OROKAI servers (entered in provider widget). |
| **Regional Compliance** | Only available where legally permitted. No VPN bypass allowed. |

## Support & Troubleshooting

**Who Handles What:**

Understanding who to contact for different issues ensures faster resolution. Here's a clear breakdown of support responsibilities:

| Issue Type | Contact | Resolution Time |
|------------|---------|-----------------|
| Payment declined/failed | Provider support | Real-time to 24h |
| Card not accepted | Provider support | Immediate |
| KYC issues/verification | Provider support | 1-3 days |
| Funds not received in wallet | OROKAI support | 1-24 hours |
| Transaction tracking | OROKAI support | Real-time |
| Refund requests | Provider support | 5-10 days |
| Incorrect amount received | Provider + OROKAI | 24-48 hours |
| General questions | OROKAI support | 6-24 hours |

> OROKAI provides:

- Transaction status tracking (where is my crypto?)
- Wallet troubleshooting (didn't receive, wrong network)
- Interface support (how to use on/off-ramp feature)
- Provider liaison (escalate complex cases)

> Providers handle:

- Payment processing issues
- KYC/AML verification
- Refunds and chargebacks
- Regulatory inquiries

**Contact Information:**

- **OROKAI Support:** Available in-app via Help Center or support@orokai.io
- **Stripe Support:** Via your transaction receipt or [https://support.stripe.com](https://support.stripe.com)
- **Onramper Support:** Via partner provider's support channel (displayed during transaction)