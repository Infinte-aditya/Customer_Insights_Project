import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Rating } from '@mui/material';
import './CompanyForm.css';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted for ${companyName}`);
  };

  return (
    <Box className="form-container">
      <Typography variant="h5" className="form-title">Company Feedback Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Industry"
              variant="outlined"
              fullWidth
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Person"
              variant="outlined"
              fullWidth
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend" className="rating-label">Company Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              className="rating-stars"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              className="submit-button"
            >
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CompanyForm;
