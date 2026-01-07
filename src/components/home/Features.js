import React from 'react'
import { IoSnow } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

const Features = () => {
    return (
        <>
            <div className='marquee'>

                <marquee >
                    <ul>
                        <li>
                            <span>
                                <IoSnow />
                            </span>
                        </li>
                        <li>
                            Transforming Ideas into Digital Success!
                        </li>
                        <li>
                            <span>
                                <IoSnow />
                            </span>
                        </li>
                        <li>
                            Think Digital, Think Success!
                        </li>
                        <li>
                            <span>
                                <IoSnow />
                            </span>
                        </li>
                        <li>
                            Data-Driven Digital Strategies for Maximum Impact!
                        </li>
                    </ul>
                </marquee>
            </div>
            <section className='sec-features'>
                <div className='container'>
                    <div className='sec-head'>
                        <label className='sec-annot'>
                            Why Us
                        </label>
                        <h1>Why Choose <span>Trinovus Solutions</span></h1>
                        <p>
                            We combine innovation, expertise, and dedication to deliver exceptional digital solutions that drive your business forward.
                        </p>
                    </div>

                    <div className='features-grid'>
                        <div className='feature-card'>
                            <div className='feature-icon-wrapper'>
                                <MdWeb />
                            </div>
                            <div className='feature-content'>
                                <h4>Expert Team</h4>
                                <p>
                                    Our skilled professionals bring years of experience and cutting-edge expertise to every project.
                                </p>
                            </div>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-icon-wrapper'>
                                <MdWeb />
                            </div>
                            <div className='feature-content'>
                                <h4>Quality Results</h4>
                                <p>
                                    We deliver high-quality solutions that exceed expectations and drive measurable business growth.
                                </p>
                            </div>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-icon-wrapper'>
                                <MdWeb />
                            </div>
                            <div className='feature-content'>
                                <h4>Fast Delivery</h4>
                                <p>
                                    Our team values your time, delivering projects on schedule with efficiency and precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features