// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { ListGroup } from 'react-bootstrap';

function Dashboard() {
  const [workouts, setWorkouts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutCollection = collection(db, "workouts");
      const workoutSnapshot = await getDocs(workoutCollection);
      const workoutList = workoutSnapshot.docs.map(doc => doc.data());
      setWorkouts(workoutList);
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h3>Recent Workouts</h3>
      <ListGroup>
        {workouts && workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <ListGroup.Item key={index} className='bg-recent'>
              <strong>{workout.activityType}</strong> - {workout.duration} mins, {workout.caloriesBurned} calories
            </ListGroup.Item>
          ))
        ) : (
          <p>No workouts available</p>
        )}
      </ListGroup>
    </div>
  );
}

export default Dashboard;
