import React from 'react';
import styles from './FlowSection.module.css';

export default function FlowSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.darkCard}`}>
          <div className={styles.kicker}>Ownership</div>
          <h3 className={styles.title}>The User</h3>
          <p className={styles.textMuted}>
            Controls the private keys. Signs every transaction. Full sovereignty.
          </p>
        </div>

<div className={`${styles.card} ${styles.primaryCard}`}>
  <div className={`${styles.kicker} ${styles.kickerOnPrimary}`}>Orchestration</div>
  <h3 className={`${styles.title} ${styles.titleOnPrimary}`}>OROKAI</h3>
  <p className={styles.textOnPrimary}>
    Simplifies steps. Aggregates chains. AI-driven recommendations.
  </p>
</div>


        <div className={`${styles.card} ${styles.darkCard}`}>
          <div className={styles.kicker}>Execution</div>
          <h3 className={styles.title}>DeFi Protocols</h3>
          <p className={styles.textMuted}>
            Lending, staking and DEX swaps executed via smart contracts.
          </p>
        </div>
      </div>
    </section>
  );
}
