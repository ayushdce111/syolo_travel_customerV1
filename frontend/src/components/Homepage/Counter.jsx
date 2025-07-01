import React, { useEffect, useState } from 'react';

const Counter = () => {
  const statsData = [
    {
      target: 15000,
      label: 'Trips',
      format: (val) => `${(val / 1000).toFixed(0)}K+`,
    },
    {
      target: 500,
      label: 'World Wide Destinations',
      format: (val) => `${val}+`,
    },
    {
      target: 41,
      label: 'Travel Partners',
      format: (val) => `${val}+`,
    },
    {
      target: 3500,
      label: 'Travellers/Month',
      format: (val) => `${val.toLocaleString()}+`,
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = Math.max(stat.target / 50, 1); // smaller increment = slower
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.target) {
            updated[index] = Math.min(updated[index] + increment, stat.target);
          }
          return updated;
        });
      }, 30); // slower update interval (was 20ms)
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
    background: '#f9f9f9',
  };

  const statStyle = {
    textAlign: 'center',
    margin: '15px',
    minWidth: '150px',
  };

  const numberStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  };

  const labelStyle = {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    marginTop: '5px',
  };

  return (
    <div style={containerStyle}>
      {statsData.map((stat, index) => (
        <div key={index} style={statStyle}>
          <div style={numberStyle}>{stat.format(Math.floor(counts[index]))}</div>
          <div style={labelStyle}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
