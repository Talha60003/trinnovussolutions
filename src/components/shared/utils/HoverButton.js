import React from 'react'

const HoverButton = ({content,isDarkText}) => {
    return (
        <button className='hoverBtn'>
            <div className='hoverBtnRight'>
                <div className='hoverBtnRightInner'>
                    <p>{content}</p>
                    <label style={{ color: isDarkText ? 'black' : 'white' }} className='hoverBtnLb1'>{content}</label>
                    <label className='hoverBtnLb2'>{content}</label>
                </div>
            </div>
        </button>
    )
}

export default HoverButton