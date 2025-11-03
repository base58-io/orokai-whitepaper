---
sidebar_label: Release Management and Quality
sidebar_position: 6
custom_edit_url: null
---

# Release Management and Quality

## Quality Assurance Process

### Environments

dev → testnet (public) → canary mainnet → mainnet.

### Audits

Before major releases and after changes to critical modules; continuous bug bounty program.

### Observability

Telemetry, alerts, SLO for key services (routing, indexing).

### Rollbacks

Contingency plan and feature rollback procedures.

:::tip[Safety-first deployment]

Multi-stage release process with comprehensive monitoring ensures issues are caught early and users are protected from production failures.

:::