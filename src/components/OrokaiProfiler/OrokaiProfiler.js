// src/components/OrokaiProfiler/OrokaiProfiler.js
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from './styles.module.css';

// Rejestracja modułów ChartJS
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Dane strategii (logika biznesowa)
const strategies = {
  '1-new': {
    title: 'Stable Yield Starter',
    desc: 'Maximum safety focus. Suggestions limited to large-cap stablecoin pools and single-sided staking on Ethereum Mainnet.',
    tag: '#stable_yield',
    data: [90, 20, 30, 80, 20],
  },
  '2-new': {
    title: 'Balanced Growth',
    desc: 'A mix of stability and growth. Exposure to liquid staking tokens (LSTs) and established lending markets.',
    tag: '#growth_context',
    data: [60, 50, 60, 60, 40],
  },
  '3-new': {
    title: 'Aggressive Learning',
    desc: 'Higher risk exposure introduced gradually. Includes volatile pools but with strict liquidity warnings.',
    tag: '#high_beta',
    data: [30, 70, 80, 40, 60],
  },
  '1-pro': {
    title: 'Capital Preservation',
    desc: 'Efficiency focused. Advanced strategies (looping/folding) but applied to low-volatility assets to minimize principal risk.',
    tag: '#preservation_adv',
    data: [85, 40, 45, 30, 30],
  },
  '2-pro': {
    title: 'DeFi Native',
    desc: 'The standard for active users. Diverse portfolio across L2s, utilizing bridges and aggregators for optimal execution.',
    tag: '#defi_native',
    data: [50, 70, 75, 40, 50],
  },
  '3-pro': {
    title: 'Degen Mode (Alpha)',
    desc: 'High variance strategies. Early-stage protocols and lower liquidity pools. Strict stop-loss notifications enabled.',
    tag: '#alpha_seeker',
    data: [20, 90, 95, 20, 80],
  },
};

export default function OrokaiProfiler() {
  const [risk, setRisk] = useState(2);
  const [experience, setExperience] = useState('new');

  // Pobranie aktualnej strategii
  const currentKey = `${risk}-${experience}`;
  const strategy = strategies[currentKey];

  // Konfiguracja danych wykresu
  const chartData = {
    labels: ['Safety', 'Speed', 'Yield', 'Ease', 'Cost'],
    datasets: [
      {
        label: 'Current Profile',
        data: strategy.data,
        backgroundColor: 'rgba(203, 185, 185, 0.15)',
        borderColor: '#CBB9B9',
        pointBackgroundColor: '#CBB9B9',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#CBB9B9',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.05)' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        pointLabels: {
          font: { size: 11, family: "'Satoshi', sans-serif", weight: '500' },
          color: '#A3A3A3',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { display: false, backdropColor: 'transparent' },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const riskLabels = ['Conservative', 'Balanced', 'Aggressive'];

 // Fragment pliku src/components/OrokaiProfiler/index.js

  return (
    <div className={styles.profilerContainer}>
      <div className={styles.header}>
        <h2>Interactive Profiling</h2>
        <p>Adjust controls to see how OROKAI adapts logic.</p>
      </div>

      <div className={styles.grid}>
        
        {/* 1. KONTROLKI (Lewa góra) */}
        <div className={styles.panel}>
          <div className={styles.stepIndicator}>
            <span className={styles.stepNum}>1</span>
            <h3>Configuration</h3>
          </div>

          <div className={styles.controlGroup}>
            <div className={styles.labelRow}>
              <label>Risk Tolerance</label>
              <span className={styles.brandText}>{riskLabels[risk - 1]}</span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={risk}
              onChange={(e) => setRisk(parseInt(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>Safe</span>
              <span>Mid</span>
              <span>Degen</span>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label>Experience Level</label>
            <div className={styles.toggleGroup}>
              <button
                className={`${styles.toggleBtn} ${experience === 'new' ? styles.active : ''}`}
                onClick={() => setExperience('new')}
              >
                Beginner
              </button>
              <button
                className={`${styles.toggleBtn} ${experience === 'pro' ? styles.active : ''}`}
                onClick={() => setExperience('pro')}
              >
                Pro
              </button>
            </div>
          </div>
        </div>

        {/* 2. WYNIK (Prawa góra - przeniesiony tutaj!) */}
        <div className={`${styles.panel} ${styles.outputPanel}`}>
            <div className={styles.glowEffect}></div>
            <div className={styles.contentRelative}>
                <span className={styles.aiLabel}>AI Recommendation</span>
                <h3 className={styles.strategyTitle}>{strategy.title}</h3>
                <p className={styles.strategyDesc}>{strategy.desc}</p>
                
                <div className={styles.tagRow}>
                    <span>Context Tag</span>
                    <div className={styles.tag}>
                        {strategy.tag}
                    </div>
                </div>
            </div>
        </div>

        {/* 3. WYKRES (Dół - szeroki) */}
        <div className={`${styles.panel} ${styles.chartPanel}`}>
            <div className={styles.chartWrapper}>
                <Radar data={chartData} options={chartOptions} />
            </div>
            <p className={styles.chartCaption}>Live Attribute Mapping</p>
        </div>

      </div>
    </div>
  );
}