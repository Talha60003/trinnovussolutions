import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const SlideButton = ({content,isDarkText}) => {
    return (
        <button className='slideBtn'>
            <div className='slideLeft'>
                <span className='slideBtnSp1'><FiArrowRight /></span>
                <span className='slideBtnSp2'><FiArrowRight /></span>
            </div>
            <div className='slideRight'>
                <div className='slideRightInner'>
                    <p>{content}</p>
                    <label style={{color:isDarkText?'black':'white'}} className='slideBtnLb1'>{content}</label>
                    <label className='slideBtnLb2'>{content}</label>
                </div>
            </div>
        </button>
    )
}

export default SlideButton