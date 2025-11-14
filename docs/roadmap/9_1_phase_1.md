---
sidebar_label: Phase 1 — Foundations
sidebar_position: 2
custom_edit_url: null
---

# Phase 1 — Foundations

## Scope: Minimum Viable Product

### DeFi staking

> Integrations for 
- ETH (via Lido - stETH)
- ATOM (Cosmos)
- SOL (Solana)
- protocol allow-list, rewards view.

### On/Off-Ramp (via Partners)

> Entry/exit through licensed partners (issuance/settlements/KYC/AML on partner side).
- Stripe integration (primary)
- Onramper integration (backup)
- Credit card on-ramp
- Bank transfer off-ramp

### Payment Card (via V Plus Pay)

> Virtual card first (physical in Phase 2)
- Spend from wallet balance
- Basic fee structure (2.5%)

### DEX domestic & swap

> Basic crypto swaps within supported chains:
- Uniswap V3 (Ethereum, Polygon, Base)
- Raydium (Solana)
- Allow-list approach (vetted pools only)
- Transparent fee breakdown 

### Zero-Setup Wallet

> Smart wallet creation
- user-side, non-custodial
- Email/social login (MPC key management)
- Seed phrase backup option
- WalletConnect support (existing wallets)

## Milestones

### Milestone 1
#### Core Infrastructure
> Deliverables:
- Multi-chain RPC integration (Ethereum, Solana, Cosmos)
- Wallet creation flow tested
- Basic UI/UX (web app)
- Smart contracts deployed (testnet)

### Milestone 2
#### Partner Integrations
> Deliverables:
- Stripe/Onramper live (testnet/sandbox)
- V Plus Pay card integration complete
- Lido staking functional
- Uniswap swap routing working

### Milestone 3
#### Beta Launch
> Deliverables:
- Closed beta (100-500 users, invite-only)
- Monitoring & observability live
- Support infrastructure ready
- Bug bounty program launched

### Milestone 4
#### Public Launch
> Deliverables:
- Public availability (open signups)
- Marketing campaign (content, paid ads, partnerships)
- Documentation complete (user guides, FAQs)
- Initial liquidity partnerships (protocols, wallets)

## Technical Deliverables

### Smart Contracts
- AllocationRouter (orchestrates multi-step flows)
- Protocol adapters (Lido, Cosmos validators, Solana staking)
- DEX router (Uniswap integration)
- Emergency pause mechanism

### Backend Services
- RPC aggregation layer (multi-provider redundancy)
- Indexer (transaction history, balances)
- Quote/routing engine (DEX price aggregation)
- Webhook handlers (partner events)
- Job queue (async operations)

### Frontend

- Web app (React, responsive)
- Wallet adapter (WalletConnect, smart wallet creation)
- Transaction flow (prepare, preview costs, sign)
- Dashboard (balances, history, positions)
- Support chat (Intercom or similar)

## Compliance & Partnerships
### Regulatory
- Legal review of ToS, Privacy Policy
- Geo-restrictions implemented (sanctions compliance)
- Partner KYC/AML (handled by Stripe, V Plus Pay)
### Key Partnerships
- Stripe (on-ramp) - Priority 1
- Onramper (on-ramp backup) - Priority 2
- V Plus Pay (card issuer) - Priority 1
- 1-2 DeFi protocols (Lido confirmed, others TBD)

:::tip[Foundation building]

Phase 1 establishes core infrastructure and validates the non-custodial model with essential DeFi integrations.

:::