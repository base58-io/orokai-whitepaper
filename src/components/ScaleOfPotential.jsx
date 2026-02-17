import React, { useState, useEffect } from 'react';

const theme = {
  bg: '#171717',
  brand: '#CBB9B9',
  cardBg: '#1f1f1f',
  textMuted: '#888888',
  radius: '1.5rem',
  fontMain: '"Satoshi", sans-serif',
  fontSerif: '"Zodiak", serif',
};

const AdoptionChart = ({ active, potential }) => {
  const [offset, setOffset] = useState(283);
  const percentage = (active / potential) * 100;
  const strokeDasharray = 283; 
  const strokeDashoffset = strokeDasharray - (strokeDasharray * (percentage / 100));

  useEffect(() => {
    const timer = setTimeout(() => setOffset(strokeDashoffset), 500);
    return () => clearTimeout(timer);
  }, [strokeDashoffset]);

  return (
    <div style={{ 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '240px', 
      height: '240px', 
      margin: '0 auto' 
    }}>
      <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke={theme.brand}
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          style={{ 
            strokeDashoffset: offset, 
            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            strokeLinecap: 'round'
          }}
        />
      </svg>
      {/* Centered Text Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '10px'
      }}>
        <span style={{ 
          fontSize: '2.2rem', 
          fontWeight: 800, 
          color: '#fff', 
          letterSpacing: '-0.05em', 
          lineHeight: 1 
        }}>
          0.33%
        </span>
        <span style={{ 
          fontSize: '0.65rem', 
          color: theme.textMuted, 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          fontWeight: 700, 
          marginTop: '4px',
          maxWidth: '100px',
          lineHeight: 1.2
        }}>
          Market Penetration
        </span>
      </div>
    </div>
  );
};

export const ScaleOfPotential = () => {
  const metrics = [
    { label: 'Target Audience', value: '2.1 Billion', sub: 'Banked with >$1k savings' },
    { label: 'Active Participation', value: '7 Million', sub: 'Unique DeFi Wallets (Q4 2024)', highlight: true },
    { label: 'The Adoption Gap', value: '99.67%', sub: 'Remaining Potential' }
  ];

  return (
    <div style={{ 
      fontFamily: theme.fontMain, 
      color: '#fff', 
      backgroundColor: theme.bg,
      padding: '2.5rem',
      borderRadius: theme.radius,
      border: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden',
      margin: '2rem 0'
    }}>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,700&f[]=zodiak@400,700&display=swap');
        
        .op-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        @media (min-width: 996px) {
          .op-container {
            flex-direction: row;
            align-items: stretch;
          }
          .op-left { flex: 1.2; }
          .op-right { flex: 0.8; }
        }

        .metric-card {
            background-color: ${theme.cardBg};
            border: 1px solid rgba(203, 185, 185, 0.1);
            border-radius: ${theme.radius};
            padding: 1.25rem 1.75rem;
            transition: all 0.4s ease;
            margin-bottom: 1rem;
        }
        
        .metric-card:hover {
            border-color: rgba(203, 185, 185, 0.4);
            transform: translateY(-3px);
        }

        .zodiak-italic { 
          font-family: ${theme.fontSerif}; 
          font-weight: 700; 
          font-style: italic;
        }
      `}</style>
      
      <div className="op-container">
        {/* Left Column: Metrics */}
        <div className="op-left">
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
            {metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ color: theme.textMuted, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
                      {m.label}
                    </span>
                    <div style={{ fontSize: '2rem', fontWeight: 700, margin: '0.2rem 0', color: m.highlight ? theme.brand : '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                      {m.value}
                    </div>
                    <span style={{ color: theme.textMuted, fontSize: '0.75rem' }}>{m.sub}</span>
                  </div>
                  {m.highlight && (
                    <div style={{ color: theme.brand, opacity: 0.8 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Chart */}
        <div className="op-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '1rem' }}>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'rgba(255,255,255,0.02)', 
            borderRadius: '50%', 
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'inline-block'
          }}>
             <AdoptionChart active={7} potential={2100} />
          </div>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center', maxWidth: '280px' }}>
            <h3 className="zodiak-italic" style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: theme.brand }}>
              A 99.67% Opportunity
            </h3>
            <p style={{ color: theme.textMuted, fontSize: '0.85rem', lineHeight: 1.4, margin: 0 }}>
              The current DeFi user base is just a tiny sliver of the global banked population.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleOfPotential;