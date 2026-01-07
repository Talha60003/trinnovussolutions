import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/shared/layout';
import { Scrollbar } from 'smooth-scrollbar-react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import AboutPage from './components/about/About';
import Home from './components/home/Home';
import RefundPolicy from './components/refundPolicy/RefundPolicy';
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions';
import Complaint from './components/complaint/Complaint';
import PricingPage from './components/pricing/Pricing';
import PortfoliPage from './components/portfolio/Portfolio';
import ServicesPage from './components/services/Services';
import ContactPage from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="pricing" element={<PricingPage/>} />
          <Route path="portfolio" element={<PortfoliPage/>} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="complaint-policy" element={<Complaint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
