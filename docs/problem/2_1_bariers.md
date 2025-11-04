---
sidebar_label: Barriers to Entry in DeFi
sidebar_position: 2
custom_edit_url: null
---

# Barriers to Entry in DeFi

## Challenges Facing New Users

### Wallets and private keys

For new users, simply creating a wallet and understanding that a <mark>private key</mark> cannot be disclosed or lost is often a critical barrier. Additionally, <mark>seed phrases, backups, and phishing pose</mark> significant problems.

### Gas costs and tokens

On each network, transaction fees are denominated in a different token and change dynamically. Users must ensure they have the appropriate gas token on each chain, which generates additional steps (and mistakes).

### Cross-chain bridges

Transferring assets between networks requires tools that carry technical and operational risks (errors, incorrect parameters, confusing assets with similar names)

### Multi-step operations

A simple allocation may require <mark>several steps:</mark> swap → bridge → deposit/stake → claim/re-stake. Each stage involves separate transactions, fees, risks, and decisions.

## Consequence

High chance of operational error (e.g., wrong address/chain, incorrect gas token), unnecessary costs, and abandonment of the process by non-technical users.

:::warning[high chance of operational error]

For non-technical users, there is a high probability of making an irreversible mistake.

:::

## **"Journey of Pain" – A typical user's path**

User wants to start staking ETH. Here's what they must go through:

Step 1: Choose a wallet
```
├─ Metamask vs. Rabby vs. Rainbow vs. Ledger vs. Trezor?
├─ "Which one is safe?"
└─ Decision: 30-60 min research → Metamask (most popular)
```
Step 2: Installation and seed phrase
```
├─ 12 random words: "voyage spatial quantum..."
├─ WARNING: "NEVER share, don't screenshot"
├─ Stress: "What if I lose it? What if someone steals it?"
└─ 25% of users quit HERE (source: Metamask survey 2023)
```

Step 3: Buy ETH
```
├─ If via CEX: KYC (1-3 days) + transfer (fee $5-15)
├─ If via DEX: need ETH for gas already (chicken-egg problem)
└─ Average time: 2-5 days
```

Step 4: Understanding Lido
```
├─ "What is stETH?" → Research 30 min
├─ "What's the difference vs. rETH, cbETH?" → Confusion
└─ "Can I lose funds?" → FUD (Fear, Uncertainty, Doubt)
```

Step 5: Connect wallet to Lido
```
├─ Pop-up: "Lido.fi wants to connect to your wallet"
├─ Phishing fear: "Is this the real Lido?"
└─ Verification: check URL, logo, community
```

Step 6: Approve contract
```
├─ Pop-up: "Allow Lido to spend your ETH - Unlimited"
├─ "UNLIMITED?! That's dangerous!"
├─ Cost: $3-8 gas fee (first time, surprise)
└─ 15% of users quit HERE (source: Etherscan data)
```

Step 7: Stake transaction
```
├─ Second transaction, second gas fee ($5-12)
├─ "Estimated time: 15 seconds" → actually 3 minutes (Ethereum congestion)
└─ Success... or is it?
```

Step 8: Verification
```
├─ "Did I get stETH?" → Must manually add token to Metamask
├─ "When do I get rewards?" → Research: "accrues daily, visible in balance"
└─ "How to withdraw?" → More research: "swap stETH → ETH or unstake queue"
```


> TOTAL TIME: 3-7 days (with KYC) or 4-8 hours (without KYC)

> NUMBER OF STEPS: 8 major + ~20 micro-decisions

> POSSIBLE QUIT POINTS: 5

> SUCCESS RATE (completion rate): ~35-40%


