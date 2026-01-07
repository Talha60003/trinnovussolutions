import React from 'react'
import ServicePricingCarousel from '../home/ServicePricingCarousel'

const PricingPage = () => {
  return (
    <section className='p-about-us'>
      <div className='p-about-header'>
        <div>
          <h1>Pricing</h1>
        </div>
      </div>
      <ServicePricingCarousel/>
    </section>
  )
}

export default PricingPage