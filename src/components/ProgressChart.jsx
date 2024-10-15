// src/components/ProgressChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function ProgressChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const workoutCollection = collection(db, "workouts");
      const workoutSnapshot = await getDocs(workoutCollection);
      const workoutList = workoutSnapshot.docs.map(doc => doc.data());

      if (workoutList && workoutList.length > 0) {
        const dates = workoutList.map(w => w.date);
        const calories = workoutList.map(w => w.caloriesBurned);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Calories Burned Over Time',
              data: calories,
              borderColor: 'blue',
              borderWidth: 2,
              fill: false
            }
          ]
        });
      }
    };
    fetchWorkoutData();
  }, []);

  return (
    <div>
      <h3>Progress Tracking</h3>
      {chartData && chartData.labels ? <Line data={chartData} /> : <p>No data available for chart</p>}
    </div>
  );
}

export default ProgressChart;
