import React from 'react'
import SlideButton from './utils/SlideButton'
import HoverButton from './utils/HoverButton'

const FooterStrip = () => {
  return (
    <div className='footerStrip'>
        <h1>
            Empowering Brands with <span>Digital Excellence!</span>
        </h1>
        <div className='mt-3'>
            <SlideButton content={"Get Started"}/>
        </div>
    </div>
  )
}

export default FooterStrip