import React from 'react'
import { Navbar,Landing,Contacts, Footer,FAQ } from '../../components'
const MainPage = () => {
  return (
    <div className='main__container'>
      <Navbar/>
      <Landing/>
      <FAQ />
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default MainPage
