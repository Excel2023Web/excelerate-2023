import React from 'react'
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import './Partners.css'
import orangeSystem from '../../assets/png/orangeSystems.jpeg'
const Partners = () => {
  return (
    <div className='partners__container'>
      <div data-aos="zoom-in" aos-delay="200" className="resp__upper__heading">
        <img src={titleVectorLeft} alt="" />
        <h1>PARTNERS</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <div className="prtners__cards_container">
        <div className="partners__card">
            <img src={orangeSystem} alt="" />
            <p>Campus Ambassador Partner</p>
        </div>
      </div>
    </div>
  )
}

export default Partners
