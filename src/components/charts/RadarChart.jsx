import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function RadarChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels: [
          "Ease of Use",
          "Asset Control",
          "Yield Potential",
          "Accessibility",
          "Time saving"
        ],
        datasets: [
          {
            label: 'OROKAI',
            data: [95, 100, 90, 95, 95],
            borderColor: '#CBB9B9',
            backgroundColor: 'rgba(203,185,185,0.15)',
            borderWidth: 3
          },
          {
            label: 'Traditional Banks',
            data: [90, 10, 15, 85, 20],
            borderColor: '#6D7D8D',
            borderDash: [5, 5],
            borderWidth: 2
          },
          {
            label: 'Raw DeFi',
            data: [25, 100, 95, 30, 20],
            borderColor: '#8D9D8D',
            borderWidth: 2
          }
        ]
      },
  options: {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        boxWidth: 42,
        font: {
          size: 12
        }
      }
    },
    tooltip: {
    displayColors: true,
    callbacks: {
      labelColor: (ctx) => ({
        borderColor: ctx.dataset.borderColor,     // obrys jak linia datasetu
        backgroundColor: ctx.dataset.borderColor,           // brak wypełnienia
        borderWidth: 2,
      })
    }
  }
    
  },
        scales: {
          r: {
            angleLines: { color: 'rgba(255,255,255,0.05)' },
            grid: { color: 'rgba(255,255,255,0.05)' },
            pointLabels: { color: '#888', font: { size: 12, weight: '500' } },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: { display: false }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div style={{ height: 450 }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
