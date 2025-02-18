import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Rating } from '@mui/material';

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
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3, 
        backgroundColor: '#1a2a3a', 
        padding: 4, 
        borderRadius: 2,
        boxShadow: '0px 0px 15px rgba(0, 229, 255, 0.5)',
      }}>
      <Typography variant="h5" color="#00e5ff">Company Feedback Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              sx={{ backgroundColor: '#333', input: { color: '#fff' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Industry"
              variant="outlined"
              fullWidth
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              sx={{ backgroundColor: '#333', input: { color: '#fff' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Person"
              variant="outlined"
              fullWidth
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              sx={{ backgroundColor: '#333', input: { color: '#fff' } }}
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
              sx={{ backgroundColor: '#333', input: { color: '#fff' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend" color="#00e5ff">Company Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              sx={{ color: '#00e5ff' }}
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
              sx={{ backgroundColor: '#333', textarea: { color: '#fff' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ marginTop: 2 }}
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