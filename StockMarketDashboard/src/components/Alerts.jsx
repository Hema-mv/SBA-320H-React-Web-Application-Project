import React, { useState } from 'react';

const Alerts = ({ addAlert }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddAlert = (e) => {
    e.preventDefault();
    if (alertMessage.trim()) {
      addAlert(alertMessage);
      setAlertMessage('');
    }
  };

  return (
    <div className="alerts">
      <h2>Add Alert</h2>
      <form onSubmit={handleAddAlert}>
        <input
          type="text"
          value={alertMessage}
          onChange={(e) => setAlertMessage(e.target.value)}
          placeholder="Enter alert message"
        />
        <button type="submit">Add Alert</button>
      </form>
    </div>
  );
};

export default Alerts;