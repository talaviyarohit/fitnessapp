// src/components/Goals.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Goals() {
  const weeklyGoals = [
    { id: 1, text: 'Run 15km this week' },
    { id: 2, text: 'Burn 2000 calories' },
    { id: 3, text: 'Work out 5 days this week' },
  ];

  return (
    <div>
      <h3>Weekly Goals</h3>
      <ListGroup>
        {weeklyGoals.map(goal => (
          <ListGroup.Item key={goal.id} className='bg-recent'>
            {goal.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Goals;
