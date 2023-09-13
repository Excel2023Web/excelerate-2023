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
                <h1>Campus<br/>Ambassador</h1>
            </div>
            <div className="landing__right__bottom">
                <button className='landing__reg__button'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Landing
