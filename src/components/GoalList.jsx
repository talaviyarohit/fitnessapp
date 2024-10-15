// src/components/GoalList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { ListGroup } from 'react-bootstrap';

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const goalsCollection = collection(db, "goals");
      const goalsSnapshot = await getDocs(goalsCollection);
      const goalsList = goalsSnapshot.docs.map(doc => doc.data());
      setGoals(goalsList);
    };
    fetchGoals();
  }, []);

  return (
    <ListGroup>
      {goals.map((goal, index) => (
        <ListGroup.Item key={index}>
          {goal.goalType}: {goal.goalValue} (Completed: {goal.completed})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default GoalList;
