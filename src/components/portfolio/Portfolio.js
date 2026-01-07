import React from 'react'
import Portfolio from '../home/Portfolio'

const PortfolioPage = () => {
  return (
    <section className='p-about-us'>
      <div className='p-portfolio-header'>
        <div>
          <h1>Portfolio</h1>
        </div>
      </div>
      <Portfolio />
    </section>
  )
}

export default PortfolioPage