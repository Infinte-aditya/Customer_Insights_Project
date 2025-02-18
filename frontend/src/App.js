import React from 'react';
import './App.css'
import './Navbar/Navbar'
import Navbar from './Navbar/Navbar';
// // Create a custom dark theme with space-inspired colors
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#00e5ff', // Cyan for a futuristic look
//     },
//     background: {
//       default: '#0a1929', // Deep space blue
//       paper: '#1a2a3a', // Slightly lighter for contrast
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//     h1: {
//       fontSize: '3rem',
//       fontWeight: 700,
//       color: '#00e5ff',
//     },
//   },
// });

function App() {
  return (

    <Navbar/>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Router>
    //     <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
    //       <h1 style={{ textAlign: 'center' }}>Customer Insights</h1>
    //       <nav>
    //         <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
    //           <li><Link to="/customer" style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '1.2rem' }}>Customer</Link></li>
    //           <li><Link to="/company" style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '1.2rem' }}>Company</Link></li>
    //         </ul>
    //       </nav>
    //       <Routes>
    //         <Route path="/customer" element={<CustomerForm />} />
    //         <Route path="/company" element={<CompanyForm />} />
    //       </Routes>
    //     </Container>
    //   </Router>
    // </ThemeProvider>
  );
}

export default App;