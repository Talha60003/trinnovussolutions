import React from 'react'
import './About.css';
import About from '../home/About';

const AboutPage = () => {
    return (
        <section className='p-about-us'>
            <div className='p-about-header'>
                <div>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='p-about-second'>
                <div className='row'>
                    <div className='col-lg-6'>

                    </div>
                    <div className='col-lg-6'>

                    </div>
                </div>
            </div>
            <About />
        </section>
    )
}

export default AboutPage