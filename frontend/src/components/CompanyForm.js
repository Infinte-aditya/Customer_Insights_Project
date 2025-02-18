import React from 'react';
import { Container, Typography } from '@mui/material';

const CompanyForm = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Company Dashboard
      </Typography>
      <Typography>
        This section will allow the company to manage products and view feedback.
      </Typography>
    </Container>
  );
};

export default CompanyForm;
