import { useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const applyMermaidTheme = (isDark) => {
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: true,
        theme: isDark ? 'dark' : 'base',
        themeVariables: {
          primaryColor: isDark ? '#D3BBB6' : '#2e8555',
          primaryTextColor: isDark ? '#cfcfcf' : '#3a3a3a',
          primaryBorderColor: isDark ? '#bd9991' : '#277148',
          lineColor: isDark ? '#888888' : '#5a5a5a',
          textColor: isDark ? '#cfcfcf' : '#3a3a3a',
          mainBkg: isDark ? '#1d1d1d' : '#ffffff',
          nodeBorder: isDark ? '#D3BBB6' : '#2e8555',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
        },
      });
    }
  };

  // Nasłuchuj zmiany motywu
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyMermaidTheme(isDark);
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // Zastosuj od razu
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyMermaidTheme(isDark);
}