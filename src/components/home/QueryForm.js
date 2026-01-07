import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const QueryForm = () => {
    return (
        <section className='sec sec-query-form'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='sec-head'>
                        <div>
                            <label className='sec-annot'>
                                Let’s talk
                            </label>
                            <h1>Any Query ?</h1>
                            <p>Our dedicated call center team is available 24/7 to provide you with any assistance you may need.</p>
                            <div className='query-contact'>
                                <div className='query-contact-divider'></div>
                                <p><span><MdEmail /></span> info@trinovussolutions.com</p>
                                <p><span><FaPhoneAlt /></span> +92 314 2216003</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <form>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <input placeholder='Enter Your Name' />
                            </div>
                            <div className='col-lg-6'>
                                <input placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input placeholder='Enter Your Phone Number' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <textarea rows={4} placeholder='Enter Your Message' />
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className='sec-body'>

            </div>
        </section>
    )
}

export default QueryForm