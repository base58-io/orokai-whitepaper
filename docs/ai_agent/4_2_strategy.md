---
sidebar_label: Protocol and Strategy
sidebar_position: 3
custom_edit_url: null
---

# Protocol and Strategy Recommendations (Tilting, Diversification)

## Recommendation Logic (High Level)

### Protocol filtering
Protocols are filtered using a predefined allow-list, limited to supported categories (e.g. staking/LSTs, lending, decentralized exchanges).
Each protocol is evaluated against a set of quality criteria, including but not limited to:

> Audit coverage

> Liquidity depth

> Incident and exploit history

Only protocols meeting these baseline criteria are eligible for inclusion in recommendations.

### Profile matching
User-defined preferences (goals, risk alignment, constraints) are mapped to generalized strategy classes rather than specific actions.
Examples include:

> Liquid staking exposure vs. variable-rate pools

> Capital preservation–oriented strategies vs. growth-oriented strategies

This mapping is used solely to scope informational outputs and visible options.


:::warning[User decision required]

All recommendations are informational in nature and do not constitute instructions or automated actions.
Every allocation decision and transaction signature remains entirely under user control.

:::

## Context Group Assignment & Notification Routing

After onboarding, each user identifier is assigned to one or more context groups.
These groups represent generalized preference and intent categories derived from onboarding inputs, not individual user profiles.

System-generated notifications are displayed to a user only if the underlying event is relevant to at least one of the groups assigned to that identifier.

This mechanism ensures that surfaced information remains contextually relevant while avoiding unnecessary or unrelated alerts.

### Group Assignment Logic

Group assignment occurs after onboarding completion or via a default assignment if onboarding is skipped.

Assignments are deterministic and based on predefined mapping rules. No personal data is stored or inferred beyond group membership.

### Default Handling

If onboarding is skipped, the identifier is assigned to a default group, which enables only general, non-specialized informational messages.

### Context Groups (Examples)

#### General

> default
Applied when onboarding is skipped. Enables baseline informational messages only.

#### Strategy & Risk Orientation

> low_volatility_focus
Low-volatility assets and capital preservation–oriented strategies.

> yield_context
Yield-generating mechanisms and income-oriented data.

> growth_context
Growth-oriented strategies and higher-variance informational content.

#### Time Horizon

> short_horizon_context
Short-term horizon–relevant information (liquidity, flexibility, short lockups).

> long_horizon_context
Long-term horizon–relevant information (compounding, longer lockups).

#### Experience Level

> defi_onboarding
Educational content and guided explanations for new users.

> defi_advanced_context
Advanced DeFi concepts, metrics, and protocol-level updates.

#### Interaction Style

> guided_flows_preference
Users preferring structured, step-by-step or guided experiences.

#### Ecosystem Scope

> ethereum_ecosystem
Ethereum mainnet–specific updates and signals.

> l2_ecosystem
Ethereum Layer 2–related updates (scaling networks, fee dynamics).

> alt_l1_ecosystem
Non-Ethereum Layer 1 ecosystems.

### Notification Distribution Model

> Event occurs
> (market condition, protocol update, risk signal, lifecycle change)

> Event is tagged with one or more context groups

> Backend matches event groups with user group assignments

> Notification is displayed only if a match exists

No notifications are generated or displayed outside of this matching process.

:::TIP[IMPORTANT CLARIFICATION]

Context groups:

> do not represent user identities

> do not imply behavioral tracking

> do not enable automated execution

They are used solely to scope informational visibility and reduce noise.
:::