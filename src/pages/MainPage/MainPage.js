import React from 'react'
import { Navbar,Landing,Contacts } from '../../components'
const MainPage = () => {
  return (
    <div className='main__container'>
      <Navbar/>
      <Landing/>
      <Contacts/>
    </div>
  )
}

export default MainPage
