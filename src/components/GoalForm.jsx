// src/components/GoalForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Form, Button, Col } from 'react-bootstrap';

const GoalForm = () => {
  const [goalType, setGoalType] = useState('Weekly');
  const [goalValue, setGoalValue] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "goals"), {
        goalType,
        goalValue,
        completed: 0,
      });
      setGoalType('Weekly');
      setGoalValue(0);
    } catch (err) {
      console.error("Error adding goal: ", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Label>Goal Type</Form.Label>
          <Form.Control
            as="select"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
          >
            <option>Weekly</option>
            <option>Monthly</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Goal (Calories or Hours)</Form.Label>
          <Form.Control
            type="number"
            value={goalValue}
            onChange={(e) => setGoalValue(e.target.value)}
            placeholder="Enter Goal Value"
          />
        </Col>
      </Form.Row>
      <Button type="submit" className="mt-3">Set Goal</Button>
    </Form>
  );
}

export default GoalForm; // Ensure this matches your import
