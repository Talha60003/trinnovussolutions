import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = 'service_692xst8';
    const TEMPLATE_ID = 'template_8qqtje4';
    const PUBLIC_KEY = '0nRYjTXVjWAcaPSQ1';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        form.current.reset();
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className='p-contact-section'>
      <div className='p-contact-header'>
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='p-contact-container'>
        <div className='p-contact-info'>
          <h2>Let's Start a Conversation</h2>
          <p>Have an idea? We'd love to hear about it. Send us a message and we'll be in touch to discuss how we can help bring your vision to life.</p>

          <div className='p-contact-details'>
            <h3>Email Us</h3>
            <p>info@trinovussolutions.com</p>

            <h3>Location</h3>
            <p>Tech Hub, Innovation District</p>
          </div>
        </div>

        <div className='p-contact-form-wrapper'>
          <form ref={form} onSubmit={sendEmail} className='p-contact-form'>
            <div className='p-form-group'>
              <label>Name</label>
              <input type="text" name="user_name" required placeholder="Your Name" />
            </div>

            <div className='p-form-group'>
              <label>Email</label>
              <input type="email" name="user_email" required placeholder="your.email@example.com" />
            </div>

            <div className='p-form-group'>
              <label>Subject</label>
              <input type="text" name="subject" required placeholder="Project Inquiry" />
            </div>

            <div className='p-form-group'>
              <label>Message</label>
              <textarea name="message" required placeholder="Tell us about your project..."></textarea>
            </div>

            {status.message && (
              <div className={`p-form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className='p-submit-btn' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage