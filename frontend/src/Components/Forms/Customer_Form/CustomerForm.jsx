import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './CustomerForm.css';

const CustomerForm = () => {
  const [brandName, setBrandName] = useState('');
  const [productType, setProductType] = useState('');
  const [modelName, setModelName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted for ${brandName}`);
  };

  return (
    <Box className="customer-form-container">
      <Typography variant="h5" className="form-title">Customer Feedback Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Brand Name"
          variant="outlined"
          fullWidth
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          className="text-field"
        />
        <TextField
          label="Product Type"
          variant="outlined"
          fullWidth
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          className="text-field"
        />
        <TextField
          label="Model Name/No"
          variant="outlined"
          fullWidth
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          className="text-field"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          className="submit-button"
        >
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

export default CustomerForm;
