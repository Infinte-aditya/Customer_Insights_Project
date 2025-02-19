import React from 'react';
import CustomerForm from '../Components/Forms/Customer_Form/CustomerForm';
import CompanyForm from '../Components/Forms/Company_Form/CompanyForm';
import Home from '../Components/Home/Home';
import Feedback from '../Components/Forms/Feedback_Form/FeedbackForm'
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Navbar = () => {
  return (
      <Router>
          <nav className='navdiv'>
            <p className="title">CUSTOMER INSIGHTS</p>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/customer" className="nav-link">Customer</Link></li>
              <li><Link to="/company" className="nav-link">Company</Link></li>
              <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/customer" element={<CustomerForm />} />
            <Route path="/company" element={<CompanyForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
      </Router>
  );
};

export default Navbar;
