import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Line, Pie } from 'react-chartjs-2';

// Import Chart.js and required components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import Header from './Header';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,    // For Pie charts
  Title,
  Tooltip,
  Legend
);

function Statistics() {
  const [workoutData, setWorkoutData] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workoutCollection = collection(db, "workouts");
        const workoutSnapshot = await getDocs(workoutCollection);
        const workoutList = workoutSnapshot.docs.map(doc => doc.data());

        if (Array.isArray(workoutList) && workoutList.length > 0) {
          setWorkoutData(workoutList);

          const lineData = {
            labels: workoutList.map(w => w.date || 'Unknown Date'),
            datasets: [{
              label: 'Calories Burned',
              data: workoutList.map(w => w.caloriesBurned || 0),
              fill: false,
              borderColor: 'blue',
            }]
          };
          setLineChartData(lineData);

          const activityDurations = workoutList.reduce((acc, w) => {
            const activity = w.activityType || 'Unknown Activity';
            acc[activity] = (acc[activity] || 0) + (w.duration || 0);
            return acc;
          }, {});

          const pieData = {
            labels: Object.keys(activityDurations),
            datasets: [{
              data: Object.values(activityDurations),
              backgroundColor: ['red', 'green', 'blue', 'orange'],
            }]
          };
          setPieChartData(pieData);
        } else {
          console.error("No workout data found.");
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
     <Header/>
    <div>
        <h1>Workout Data</h1>

      <h3>Workout Trends</h3>
      {lineChartData?.datasets?.length > 0 ? (
        <Line data={lineChartData} className='line-chart' />
      ) : (
        <p>No workout data available for the line chart.</p>
      )}

      <h3>Activity Breakdown</h3>
      {pieChartData?.datasets?.length > 0 ? (
        <Pie data={pieChartData} className='pie-chart' />
      ) : (
        <p>No workout data available for the pie chart.</p>
      )}
    </div>
    </>
  );
}

export default Statistics;
