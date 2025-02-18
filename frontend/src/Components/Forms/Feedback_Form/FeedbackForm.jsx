import React, { useState } from 'react';
import './FeedbackForm.css'

function FeedbackForm({ setFeedbackSubmitted }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedbackData = {
      name,
      email,
      feedback
    };

    // Here you'd call the backend API to save the feedback
    // await fetch('/api/feedback', { method: 'POST', body: JSON.stringify(feedbackData) });
    // For now, simulate feedback submission
    console.log('Feedback submitted:', feedbackData);

    setFeedbackSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

function Feedback() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  return (
    <div className="feedback-container">
      <h1>Customer Feedback System</h1>
      {!feedbackSubmitted ? (
        <FeedbackForm setFeedbackSubmitted={setFeedbackSubmitted} />
      ) : (
        <p>Thank you for your feedback!</p>
      )}
    </div>
  );
}

export default Feedback;
