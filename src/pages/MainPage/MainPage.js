import React from 'react'
import { Navbar,Landing,Contacts, Footer, RespAndBenefits,WhatsExcel, Reward } from '../../components'
const MainPage = () => {
  return (
    <div className='main__container'>
      <Navbar/>
      <Landing/>
      <WhatsExcel/>
      <RespAndBenefits/>
      <Reward/>
      <Contacts/>
      <Footer/>

    </div>
  )
}

export default MainPage
