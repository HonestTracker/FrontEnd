import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Automatically registers controllers, elements, scales, and plugins.
import Utils from "../constants/GraphData"
function LineChart() {
  const labels = Utils.months({ count: 7 }); // Ensure you have a Utils method or import it if it's a custom utility.
  
  const data = {
    labels,
    datasets: [{
      label: '1Y',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
