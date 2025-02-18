import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CustomerForm = () => {
  const [brandName, setBrandName] = useState('');
  const [productType, setProductType] = useState('');
  const [modelName, setModelName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted for ${brandName}`);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 3, 
        backgroundColor: '#121212', 
        padding: 4, 
        borderRadius: 2 
      }}>
      <Typography variant="h5" color="white">Customer Feedback Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Brand Name"
          variant="outlined"
          fullWidth
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          color="primary"
          sx={{ backgroundColor: '#333' }}
        />
        <TextField
          label="Product Type"
          variant="outlined"
          fullWidth
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          color="primary"
          sx={{ backgroundColor: '#333', marginTop: 2 }}
        />
        <TextField
          label="Model Name/No"
          variant="outlined"
          fullWidth
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          color="primary"
          sx={{ backgroundColor: '#333', marginTop: 2 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ marginTop: 2 }}
        >
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

export default CustomerForm;
