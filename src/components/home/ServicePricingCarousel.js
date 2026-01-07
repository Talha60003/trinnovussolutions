import React, { useState, useEffect } from 'react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdDesignServices, MdWeb, MdAnimation } from 'react-icons/md'
import { FaWordpress, FaShopify, FaChartLine, FaBrain, FaRobot } from 'react-icons/fa'
import { SiGooglesearchconsole } from 'react-icons/si'
import { BsDatabaseGear, BsEye } from 'react-icons/bs'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { AiOutlineApi } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Home.css'

const ServicePricingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pricingData = [
    {
      icon: <MdDesignServices />,
      title: 'Logo Design',
      price: '$69',
      features: [
        '3 Unique Logo Concepts',
        'By 1 Designer',
        '3 Revisions',
        'Free Color Options',
        '2-3 Business Days',
        '100% Ownership',
        'All File Formats',
        '24hr Initial Concepts',
        '100% Unique Design',
        'Money Back Guarantee'
      ]
    },
    {
      icon: <MdWeb />,
      title: 'Web Design & Development',
      price: '$299',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'SEO Optimized',
        'Mobile Friendly',
        'CMS Integration',
        'Social Media Integration',
        '3 Revisions',
        'Complete Deployment',
        '1 Month Support'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Marketing',
      price: '$499',
      features: [
        'Social Media Strategy',
        'Content Creation',
        'Campaign Management',
        'Analytics & Reporting',
        'Monthly Reports',
        'Ad Campaign Setup',
        'Brand Awareness',
        'Lead Generation',
        '3 Month Package',
        'Dedicated Manager'
      ]
    },
    {
      icon: <SiGooglesearchconsole />,
      title: 'SEO',
      price: '$399',
      features: [
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Monthly Reports',
        'Google Analytics Setup',
        '3 Month Package',
        'Ranking Improvements',
        'Content Optimization',
        'Performance Tracking'
      ]
    },
    {
      icon: <FaWordpress />,
      title: 'WordPress & Shopify',
      price: '$599',
      features: [
        'Custom Theme Design',
        'Plugin Integration',
        'E-commerce Setup',
        'Payment Gateway',
        'Product Management',
        'Mobile Responsive',
        'SEO Optimized',
        '3 Revisions',
        'Training Provided',
        '6 Month Support'
      ]
    },
    {
      icon: <MdAnimation />,
      title: 'Animation',
      price: '$799',
      features: [
        '2D/3D Animation',
        'Motion Graphics',
        'Video Editing',
        'Sound Design',
        'Up to 60 Seconds',
        '3 Revisions',
        'HD Quality',
        'Multiple Formats',
        'Storyboard Included',
        'Quick Turnaround'
      ]
    },
    {
      icon: <BsDatabaseGear />,
      title: 'ERP/CRM/CMS/POS',
      price: 'Custom',
      features: [
        'Custom Development',
        'System Integration',
        'User Management',
        'Reporting Dashboard',
        'Mobile App',
        'Cloud Hosting',
        'Training & Support',
        'Maintenance Package',
        'Scalable Solution',
        '24/7 Support'
      ]
    },
    {
      icon: <FaBrain />,
      title: 'RAG',
      price: 'Custom',
      features: [
        'Custom RAG System',
        'Data Integration',
        'API Development',
        'Model Training',
        'Deployment',
        'Documentation',
        'Maintenance',
        'Scalable Architecture',
        'Performance Optimization',
        'Ongoing Support'
      ]
    },
    {
      icon: <GiArtificialIntelligence />,
      title: 'Generative AI',
      price: 'Custom',
      features: [
        'Custom AI Models',
        'Content Generation',
        'API Integration',
        'Model Fine-tuning',
        'Deployment',
        'Documentation',
        'Training Provided',
        'Scalable Solution',
        'Performance Monitoring',
        'Ongoing Support'
      ]
    },
    {
      icon: <BsEye />,
      title: 'Object Detection',
      price: 'Custom',
      features: [
        'Custom Model Training',
        'Real-time Processing',
        'API Development',
        'Integration Support',
        'Performance Optimization',
        'Documentation',
        'Deployment',
        'Scalable Architecture',
        'Maintenance',
        'Technical Support'
      ]
    },
    {
      icon: <AiOutlineApi />,
      title: 'NLP',
      price: 'Custom',
      features: [
        'Text Analysis',
        'Sentiment Analysis',
        'Language Models',
        'API Development',
        'Integration',
        'Custom Training',
        'Documentation',
        'Deployment',
        'Performance Tuning',
        'Ongoing Support'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Machine Learning',
      price: 'Custom',
      features: [
        'Custom ML Models',
        'Data Processing',
        'Model Training',
        'API Development',
        'Deployment',
        'Documentation',
        'Performance Optimization',
        'Scalable Solution',
        'Maintenance',
        'Technical Support'
      ]
    }
  ]

  const itemsPerView = 3
  const totalSlides = Math.ceil(pricingData.length / itemsPerView)
  
  // Group items into slides of 3
  const groupedData = []
  for (let i = 0; i < pricingData.length; i += itemsPerView) {
    groupedData.push(pricingData.slice(i, i + itemsPerView))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className='sec sec-pricing-carousel'>
      <div className='container'>
        <div className='sec-head'>
          <label className='sec-annot'>
            <span></span> Service Pricing
          </label>
          <h1>Transparent <span>Pricing</span> for All Services</h1>
          <p>
            Choose the perfect plan for your business needs. All prices are transparent with no hidden fees.
          </p>
        </div>

        <div className='pricing-carousel-wrapper'>
          <button className='carousel-btn carousel-btn-prev' onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          
          <div className='pricing-carousel'>
            <div 
              className='pricing-carousel-track'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {groupedData.map((group, groupIndex) => (
                <div key={groupIndex} className='pricing-carousel-slide'>
                  <div className='pricing-slide-content'>
                    {group.map((service, index) => (
                      <div key={index} className='pricing-card-modern'>
                        <div className='pricing-card-icon'>
                          {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <div className='pricing-amount'>
                          <span className='price-value'>{service.price}</span>
                          {service.price !== 'Custom' && <span className='price-period'>/project</span>}
                        </div>
                        <ul className='pricing-features-list'>
                          {service.features.map((feature, idx) => (
                            <li key={idx}>
                              <span className='feature-icon'><IoCheckmarkCircleSharp /></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className='pricing-btn'>Get Started</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className='carousel-btn carousel-btn-next' onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className='carousel-indicators'>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePricingCarousel

