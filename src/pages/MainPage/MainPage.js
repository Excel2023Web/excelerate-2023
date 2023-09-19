import React from 'react'
import { Navbar,Landing,Contacts, Footer, RespAndBenefits } from '../../components'
const MainPage = () => {
  return (
    <div className='main__container'>
      <Navbar/>
      <Landing/>
      <RespAndBenefits/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default MainPage
