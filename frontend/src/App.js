import React, { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Feedback System</h1>
        {!feedbackSubmitted ? (
          <FeedbackForm setFeedbackSubmitted={setFeedbackSubmitted} />
        ) : (
          <p>Thank you for your feedback!</p>
        )}
      </header>
    </div>
  );
}

export default App;
