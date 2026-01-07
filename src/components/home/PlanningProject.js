import React from 'react'
import { Link } from 'react-router-dom'
import SlideButton from '../shared/utils/SlideButton'
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa'

const PlanningProject = () => {
  return (
    <section className='sec-planning-proj'>
      <div className='container'>
        <div className='planning-content'>
          <div className='planning-text'>
            <label className='planning-badge'>
              <span></span> Get Started
            </label>
            <h1>
              Planning a <span>Project?</span>
            </h1>
            <p>
              Let's bring your vision to life. Our team is ready to transform your ideas into exceptional digital solutions that drive results.
            </p>
            <div className='planning-actions'>
              <Link to='/contact'>
                <SlideButton content={"Start Your Project"} showArrow={true} isDarkText={false} />
              </Link>
              <Link to='/portfolio' className='planning-link'>
                View Our Work
              </Link>
            </div>
          </div>
          <div className='planning-features'>
            <div className='planning-feature-item'>
              <div className='planning-feature-icon'>
                <FaRocket />
              </div>
              <h3>Quick Start</h3>
              <p>Fast project initiation</p>
            </div>
            <div className='planning-feature-item'>
              <div className='planning-feature-icon'>
                <FaLightbulb />
              </div>
              <h3>Expert Consultation</h3>
              <p>Professional guidance</p>
            </div>
            <div className='planning-feature-item'>
              <div className='planning-feature-icon'>
                <FaHandshake />
              </div>
              <h3>Dedicated Support</h3>
              <p>Ongoing assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanningProject