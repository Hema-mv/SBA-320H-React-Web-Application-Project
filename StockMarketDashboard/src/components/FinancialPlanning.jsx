import React, { useState } from 'react';

const FinancialPlanning = () => {
  const [budget, setBudget] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div>
      <h2>Financial Planning</h2>
      <input
        type="text"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Set your budget"
      />
      <h3>Goals</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <button onClick={() => addGoal('New Goal!')}>Add Goal</button>
    </div>
  );
};

export default FinancialPlanning