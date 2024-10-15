// src/components/WorkoutLogForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import Header from './Header';

function WorkoutLogForm() {
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activityType && duration && caloriesBurned && date) {
      await addDoc(collection(db, "workouts"), {
        activityType,
        duration,
        caloriesBurned,
        date
      });

      setActivityType('');
      setDuration('');
      setCaloriesBurned('');
      setDate('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
     <Header/>
    <h1 className='text-center mt-4'>
        Workout Log Form
    </h1>
    <Container className='mb-4'>

    <Form onSubmit={handleSubmit} className='mt-5'>
      <Form.Group className="form-group">
        <Form.Label>Activity Type</Form.Label>
        <Form.Control type="text" value={activityType} onChange={(e) => setActivityType(e.target.value)}  className="custom-input" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Duration (minutes)</Form.Label>
        <Form.Control type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="custom-input" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Calories Burned</Form.Label>
        <Form.Control type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} className="custom-input"/>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} className="custom-input"/>
      </Form.Group>
      <Button variant="primary" type="submit">Log Workout</Button>
    </Form>
    </Container>
    </>
  );
}

export default WorkoutLogForm;
