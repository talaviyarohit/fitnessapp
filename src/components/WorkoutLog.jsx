// src/components/WorkoutLog.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function WorkoutLog() {
  const [workout, setWorkout] = useState({
    activityType: '',
    duration: '',
    caloriesBurned: '',
    date: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'workouts'), workout);
      alert('Workout logged successfully');
      setWorkout({ activityType: '', duration: '', caloriesBurned: '', date: '' });
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  return (
    <div>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="activityType">
          <Form.Label>Activity Type</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="e.g., Running" 
            className="custom-input"
            value={workout.activityType}
            onChange={(e) => setWorkout({ ...workout, activityType: e.target.value }) }
          />
        </Form.Group>

        <Form.Group controlId="duration" className="mt-3">
          <Form.Label>Duration (minutes)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Duration" 
            className="custom-input"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="caloriesBurned" className="mt-3">
          <Form.Label>Calories Burned</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Calories Burned"
            className="custom-input" 
            value={workout.caloriesBurned}
            onChange={(e) => setWorkout({ ...workout, caloriesBurned: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="date" className="mt-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            value={workout.date}
            className="custom-input"
            onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Log Workout
        </Button>
      </Form>
    </div>
  );
}

export default WorkoutLog;
