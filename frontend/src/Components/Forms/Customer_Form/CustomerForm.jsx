import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Rating } from '@mui/material';
import './CustomerForm.css';

const CustomerForm = () => {
  const [brandName, setBrandName] = useState('');
  const [productType, setProductType] = useState('');
  const [modelName, setModelName] = useState('');
  const [priceRating, setPriceRating] = useState(0);
  const [designRating, setDesignRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback on ${brandName}!`);
  };

  return (
    <Box className="customer-form-container">
      <Typography variant="h4" className="form-title">
        🚀 Customer Feedback Form
      </Typography>
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

        <Typography variant="h6" className="rating-title">
          ⭐ Rate the following aspects:
        </Typography>
        <Box className="rating-container">
          <Typography>Price:</Typography>
          <Rating
            value={priceRating}
            onChange={(e, newValue) => setPriceRating(newValue)}
          />
        </Box>
        <Box className="rating-container">
          <Typography>Design:</Typography>
          <Rating
            value={designRating}
            onChange={(e, newValue) => setDesignRating(newValue)}
          />
        </Box>
        <Box className="rating-container">
          <Typography>Quality:</Typography>
          <Rating
            value={qualityRating}
            onChange={(e, newValue) => setQualityRating(newValue)}
          />
        </Box>
        <Box className="rating-container">
          <Typography>Overall Experience:</Typography>
          <Rating
            value={overallRating}
            onChange={(e, newValue) => setOverallRating(newValue)}
          />
        </Box>

        <TextField
          label="Additional Comments"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="submit-button"
        >
          🚀 Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

export default CustomerForm;
