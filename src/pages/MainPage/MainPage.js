import React from 'react'
import { Navbar,Landing,Contacts, Footer } from '../../components'
const MainPage = () => {
  return (
    <div className='main__container'>
      <Navbar/>
      <Landing/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default MainPage
