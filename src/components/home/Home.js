import React from 'react'
import Header from './Header'
import Services from './Services'
import About from './About'
import Portfolio from './Portfolio'
import Features from './Features'
import PlanningProject from './PlanningProject'

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />

      <Services />
      <Features />
    </>
  )
}

export default Home