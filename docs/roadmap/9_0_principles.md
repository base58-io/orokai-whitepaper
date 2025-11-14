---
sidebar_label: Principles and Assumptions
sidebar_position: 1
custom_edit_url: null
---

# Principles and Assumptions

## Core Development Principles

:::warning[important] 
This roadmap is <mark>not a guarantee of features or delivery dates.</mark> It represents our current strategic direction and may be adjusted as the project evolves.
:::

Before diving into specific phases, we establish the foundational principles guiding our development approach and key assumptions underpinning the timeline.

### Non-Custodial First

> Every feature must maintain self-custody model:
- Users always control their keys
- OROKAI never executes transactions on user's behalf
- "Prepare-and-sign" workflow mandatory for all operations
- Any feature violating this principle is rejected, regardless of demand

Implication: Some "convenience" features may take longer or be impossible
Example: No "auto-invest" without user signing each transaction

### DEX-First Architecture

> All crypto swaps route through external DEXs:
- OROKAI never acts as market maker or liquidity provider
- No order book or internal exchange functionality
- Allow-list approach (curated DEX integrations)
- No "best execution" claims (show costs, user decides)

Implication: Dependent on DEX liquidity and availability

### Compliance-By-Design

> Regulatory compliance built into architecture, not retrofitted:
- Geo-restrictions enforced at UI/API level
- Sanctions screening via partners (fiat operations)
- Clear separation: OROKAI = software, partners = financial services
- Features requiring licenses only via licensed partners

Implication: Some features delayed until partnerships/licenses secured

### Security & Audits Gate Progress

> No feature launches without appropriate security review:
- Smart contracts: Minimum 2 independent audits
- Critical backend: Penetration testing + code review
- New integrations: Allow-list vetting process
- Public bug bounty at all stages

Implication: Audits can delay launches by 4-8 weeks

### Iterative Release Strategy

> Ship MVPs, gather feedback, iterate:
- Phase 1: Core features only (limited scope)
- Learn from user behavior before expanding
- "Done" means "launched and stable", not "perfect"
- Future phases build on validated assumptions

Implication: Early users see basic versions, not polished final product

### User-Driven Prioritization

> Roadmap adjusts based on actual usage and feedback:
- If users don't use Feature X, we won't build Feature X+1
- If users love Feature Y, we accelerate related features
- Community input via surveys, Discord, governance (if enabled)
- Data > opinions (usage metrics inform decisions)

Implication: Roadmap may shift significantly post-launch

:::warning[Regulatory-first approach]
OROKAI prioritizes compliance and regulatory clarity before launching features that interact with traditional finance or regulated instruments.
:::

## Key Assumptions (and Risks if Wrong)

### Assumption 1
#### Technical Feasibility
Assumption:
- Multi-chain integrations can be built within estimated timelines
- RPC/indexing infrastructure scales to 100k+ users
- Smart contracts can handle complex orchestration securely
- AI models can provide useful recommendations without hallucination

Risk if wrong:
- Timeline delays (6-12 months for rewrites)
- Performance issues (slow UX, failed transactions)
- Security vulnerabilities (exploits, loss of funds)
- User dissatisfaction (AI gives bad advice → churn)

Mitigation:
- Proof-of-concept testing before committing to architecture
- Modular design (can swap out components if needed)
- Conservative estimates (pad timelines by 30%)
- Parallel development tracks (don't block on one component)

### Assumption 2
#### Partner Availability & Reliability
Assumption:
- Stripe/Onramper remain reliable for fiat on/off-ramp
- V Plus Pay delivers card functionality on schedule
- DEX protocols (Uniswap, etc.) remain available and liquid
- Bridge protocols (CCTP, Wormhole, LayerZero) maintain uptime

Risk if wrong:
- Feature delays (partner not ready when we are)
- User experience degradation (downtime, failed transactions)
- Revenue impact (can't charge fees if services unavailable)
- Reputational damage (users blame OROKAI for partner issues)

Mitigation:
- Multi-provider redundancy (Stripe + Onramper, multiple DEXs)
- Contractual SLAs with partners
- Fallback modes (if Partner A down, route via Partner B)
- Transparent status page (communicate issues honestly)

### Assumption 3
#### Regulatory Clarity (or Sufficient Ambiguity)
Assumption:
- Non-custodial software remains legal in major markets (US, EU, Asia)
- Affiliate program not classified as pyramid scheme or securities
- Token utility model acceptable to regulators (if launched)
- DeFi protocols we integrate with remain compliant

Risk if wrong:
- Forced shutdowns in certain jurisdictions (geo-block those regions)
- Legal liability (fines, enforcement actions)
- Feature removal (e.g., must disable affiliate program)
- Token launch cancelled or restructured (if Chapter 8 becomes problematic)

Mitigation:
- Legal counsel in every major jurisdiction (US, EU, Singapore, Japan)
- Conservative approach (avoid gray areas)
- Compliance gates before launching regulated features
- Flexibility to pivot model if regulations change

### Assumption 4
#### Market Demand & Product-Market Fit
Assumption:
- Users want simplified DeFi access (convenience > full control)
- Users will pay fees for orchestration/AI/UX (not just use free tools)
- Multi-chain aggregation is valuable (vs single-chain specialization)
- Cards drive engagement and revenue (vs being a loss leader)

Risk if wrong:
- Low adoption (< 10k users after 12 months)
- High churn (users try once and leave)
- Unprofitable unit economics (CAC > LTV)
- Pivot required (change core value proposition)

Mitigation:
- MVP testing with small user base (validate before scaling)
- Flexible roadmap (can shift priorities based on data)
- User research (surveys, interviews, usability testing)
- Financial runway (18-24 months to find PMF)

What the Roadmap IS and IS NOT**

## This roadmap IS

> A strategic direction (where we're headed)

>  A prioritization framework (what's important)

>  A dependency map (what must come before what)

>  A communication tool (align team, partners, users)

>  Flexible and adaptive (adjusts based on learnings)

## This roadmap is NOT

>  A guarantee of features or dates

>  A commitment to specific functionality

>  A fixed contract (we reserve right to change)

>  Investment advice (don't buy tokens based on roadmap promises)

>  A comprehensive list (many details omitted for brevity)

## Terminology for Understanding Phases

### Milestone vs Deliverable

> Milestone: Significant event or decision point

> Deliverable: Specific feature or output

> Relationship: Milestones are achieved by completing multiple deliverables