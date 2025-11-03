---
sidebar_label: Strategy Selection
sidebar_position: 2
custom_edit_url: null
---

# Strategy Selection and First Allocation

## Four-Step Process

### Step 1 – Profile

User (or AI Agent in <mark>informational mode</mark>) establishes goals, preferences, risk tolerance, and constraints (e.g., max number of steps, USDT settlement currency).

### Step 2 – Proposals

Interface displays strategic options with risk tag, number of steps, and estimated cost (gas/DEX/bridge).

### Step 3 – Prepare transactions

OROKAI prepares a sequence (approve → swap on DEX → deposit/stake) aligned with the profile; <mark>user verifies and signs.</mark>

### Step 4 – Confirmation

Results view shows allocated assets, contract permissions (with links to revoke), expected claim points, and risks.

:::warning[No "best execution"]

OROKAI does not guarantee best price; we display costs and slippage before signing.

:::