import React from 'react'
import './Home.css';
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import SlideButton from '../shared/utils/SlideButton'
// import headerVideo from './../../assets/videos/video8.mp4';
import { Link } from 'react-router-dom';
import HeroAnimation from './HeroAnimation';


const Header = () => {
    return (
        <div className='header'>
            <HeroAnimation />
            {/* <video loop muted autoPlay playsInline={true} src={headerVideo} /> */}
            <div className='header-overlay'></div>
            <div className='header-container'>
                <div className='header-content'>
                    <div className='header-badge'>
                        <span>Welcome to Trinovus Solutions</span>
                    </div>
                    <h1 className='header-title'>
                        Transform Your Business with
                        <span className='header-title-highlight'> Digital Excellence</span>
                    </h1>
                    <p className='header-subtitle'>
                        We deliver cutting-edge software solutions, stunning designs, and powerful digital strategies that drive growth and success. From AI to web development, we've got you covered.
                    </p>
                    <div className='header-actions'>
                        <Link to='/contact' className='header-btn-primary'>
                            <SlideButton content={"Get Started"} showArrow={true} isDarkText={false} />
                        </Link>
                        <Link to='/services' className='header-btn-secondary'>
                            <SlideButton content={"Our Services"} showArrow={true} isDarkText={false} />
                        </Link>
                    </div>
                    <div className='header-stats'>
                        <div className='stat-item'>
                            <div className='stat-number'>500+</div>
                            <div className='stat-label'>Projects Completed</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-number'>12+</div>
                            <div className='stat-label'>Services Offered</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-number'>98%</div>
                            <div className='stat-label'>Client Satisfaction</div>
                        </div>
                    </div>
                </div>
                <div className='header-social'>
                    <div className='social-btn-holder'>
                        <a href='https://www.facebook.com/people/Trinovus-Solutions/61569563022229/' aria-label='Facebook' target='_blank' rel='noreferrer'>
                            <span className='sslSp1'><ImFacebook /></span>
                            <span className='sslSp2'><ImFacebook /></span>
                        </a>
                        <a href='https://www.instagram.com/trinovus_solutions/?igsh=MXRpYm05Z2FxYWZ5OA%3D%3D#' target='_blank' rel='noreferrer' aria-label=' Instagram'>
                            <span className='sslSp1'><GrInstagram /></span>
                            <span className='sslSp2'><GrInstagram /></span>
                        </a>
                        <a href='https://www.linkedin.com/company/trinovus-solutions' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
                            <span className='sslSp1'><FaLinkedinIn /></span>
                            <span className='sslSp2'><FaLinkedinIn /></span>
                        </a>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header