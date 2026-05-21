import React from 'react'
import logo from './../../assets/images/logos/FullLogoTransparent.png';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='main-footer'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='ftrPart ftrComp'>
              <Link to={'/'}>
                <img src={logo} />
              </Link>
              <p>
                Trinovus Solutions delivers cutting-edge digital solutions, from stunning designs to powerful software systems and AI solutions, helping businesses thrive in the digital world.
              </p>
            </div>
          </div>
          <div className='col-lg-2 col-md-6'>
            <div className='ftrPart'>
              <h5>Services</h5>
              <ul>
                <li>
                  <a href='#'>Logo Design</a>
                </li>
                <li>
                  <a href='#'>Web Design & Development</a>
                </li>
                <li>
                  <a href='#'>Marketing</a>
                </li>
                <li>
                  <a href='#'>SEO</a>
                </li>
                <li>
                  <a href='#'>WordPress & Shopify</a>
                </li>
                <li>
                  <a href='#'>Animation</a>
                </li>
                <li>
                  <a href='#'>ERP/CRM/CMS/POS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='ftrPart'>
              <h5>AI Services</h5>
              <ul>
                <li>
                  <a href='#'>RAG (Retrieval Augmented Generation)</a>
                </li>
                <li>
                  <a href='#'>Generative AI</a>
                </li>
                <li>
                  <a href='#'>Object Detection</a>
                </li>
                <li>
                  <a href='#'>NLP (Natural Language Processing)</a>
                </li>
                <li>
                  <a href='#'>Machine Learning</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-2 col-md-6'>
            <div className='ftrPart'>
              <h5>Useful Links</h5>
              <ul>
                {/* <li>
                  <Link to={'/pricing'}>Pricing</Link>
                </li> */}
                <li>
                  <Link to={'/portfolio'}>Portfolio</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact Us</Link>
                </li>
                <li>
                  <Link to={'/refund-policy'}>Refund Policy</Link>
                </li>
                <li>
                  <Link to={'terms-conditions'}>Terms Conditions</Link>
                </li>
                <li>
                  <Link to={'complaint-policy'}>Complaint Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-2 col-md-6'>
            <div className='ftrPart ftrContact'>
              <h5>Contact</h5>
              <p>
                <span><FaPhoneAlt /></span> +92 315 8431962
              </p>
              <p>
                <span><MdEmail /></span> info@trinovussolutions.com
              </p>
              <div className='social-btn-holder'>
                <a href='https://www.facebook.com/people/Trinovus-Solutions/61569563022229/' target='_blank' rel='noreferrer'>
                  <span className='sslSp1'><ImFacebook /></span>
                  <span className='sslSp2'><ImFacebook /></span>
                </a>
                <a href='https://www.instagram.com/trinovus_solutions/?igsh=MXRpYm05Z2FxYWZ5OA%3D%3D#' target='_blank' rel='noreferrer'>
                  <span className='sslSp1'><GrInstagram /></span>
                  <span className='sslSp2'><GrInstagram /></span>
                </a>
                <a href='https://www.linkedin.com/company/trinovus-solutions' target='_blank' rel='noreferrer'>
                  <span className='sslSp1'><FaLinkedinIn /></span>
                  <span className='sslSp2'><FaLinkedinIn /></span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lower-footer'>
        <p>
          © Copyright 2025 Trinovus Solutions, All Rights Reserved
        </p>
      </div>
    </>
  )
}

export default Footer
