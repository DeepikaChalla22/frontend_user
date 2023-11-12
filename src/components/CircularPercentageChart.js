
import React, { useRef, useEffect } from 'react';

const CircularPercentageChart = ({ percent }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percent) / 100) * circumference;

  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = progress;
    }
  }, [percent, progress]);

  return (
    <svg width="36" height="36" className="circular-chart">
      <circle
        className="progress-ring-circle-bg"
        stroke="#eee" /* Background color */
        strokeWidth="5"
        fill="transparent"
        r={radius}
        cx="18"
        cy="18"
      />
      <circle
        className="progress-ring-circle"
        ref={circleRef}
        stroke="green"
        strokeWidth="5"
        fill="transparent"
        r={radius}
        cx="18"
        cy="18"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
      />
      {/* Text element to display the percentage value */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="percentage-text"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircularPercentageChart;

