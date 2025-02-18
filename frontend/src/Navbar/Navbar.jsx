import React from 'react'
import { ThemeProvider, createTheme, Container, CssBaseline } from '@mui/material';
import CustomerForm from '../Components/Forms/Customer_Form/CustomerForm';
import CompanyForm from '../Components/Forms/Company_Form/CompanyForm';
import Home from '../Components/Home/Home'
import './Navbar.css'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

// Create a custom dark theme with space-inspired colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff', // Cyan for a futuristic look
    },
    background: {
      default: '#0a1929', // Deep space blue
      paper: '#1a2a3a', // Slightly lighter for contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#00e5ff',
    },
  },
});

const Navbar = () => {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
          <h1 style={{ textAlign: 'center' }}>Customer Insights</h1>
          <nav>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/customer" style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '1.2rem' }}>Customer</Link></li>
              <li><Link to="/company" style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '1.2rem' }}>Company</Link></li>
              <li><Link to="/" style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/customer" element={<CustomerForm />} />
            <Route path="/company" element={<CompanyForm />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
    </div>
  )
}

export default Navbar
