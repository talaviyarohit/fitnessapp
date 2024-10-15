// src/components/ProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

function GoalChart({ progressData }) {
  const data = {
    labels: progressData.dates,
    datasets: [
      {
        label: 'Progress (Calories/Hours)',
        data: progressData.values,
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      }
    ]
  };

  return <Line data={data} />;
}

export default GoalChart;
