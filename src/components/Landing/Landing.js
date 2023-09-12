import React from 'react'
import './Landing.css'
import landing from '../../assets/landing.svg'
function Landing() {
  return (
    <div className='landing__container'>
        <div className="landing__left__section">
            <img src={landing} alt="" />
        </div>
        <div className="landing__right__section">
            <div className="landing__right__top">

            </div>
            <div className="landing__right__bottom">

            </div>
        </div>
    </div>
  )
}

export default Landing
