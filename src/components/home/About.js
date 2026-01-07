import React from 'react'
import { FaRocket, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section className='sec sec-about'>
      <div className='container'>
        <div className='sec-head'>
          <label className='sec-annot'>
            About Us
          </label>
          <h1>Your Partners for <span>Digital Success</span></h1>
          <p>
            We are a forward-thinking software house dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        <div className='about-content'>
          <div className='about-main'>
            <div className='about-text'>
              <h2>Innovative Ideas, <br />Bold Designs</h2>
              <p>
                At Trinovus Solutions, we don't just build software; we craft <strong>digital experiences</strong> that define brands.
                We transform the unexpected into reality, pushing boundaries to deliver solutions that not only meet but exceed your expectations.
              </p>
              <p>
                Our team of forward-thinking experts specializes in web development, AI integration, and scalable enterprise systems.
                We are your strategic partners in navigating the complex digital landscape, ensuring your business stays ahead of the curve.
              </p>
            </div>
            <div className='about-features'>
              <div className='about-feature-item'>
                <div className='feature-icon'>
                  <FaRocket />
                </div>
                <div className='feature-content'>
                  <h3>Innovation First</h3>
                  <p>We leverage the latest technologies to create groundbreaking solutions</p>
                </div>
              </div>
              <div className='about-feature-item'>
                <div className='feature-icon'>
                  <FaLightbulb />
                </div>
                <div className='feature-content'>
                  <h3>Creative Excellence</h3>
                  <p>Bold designs and creative thinking drive everything we do</p>
                </div>
              </div>
              <div className='about-feature-item'>
                <div className='feature-icon'>
                  <FaUsers />
                </div>
                <div className='feature-content'>
                  <h3>Client-Centric</h3>
                  <p>Your success is our priority - we work closely with you every step</p>
                </div>
              </div>
              <div className='about-feature-item'>
                <div className='feature-icon'>
                  <FaAward />
                </div>
                <div className='feature-content'>
                  <h3>Quality Assured</h3>
                  <p>We deliver excellence with every project, every time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About