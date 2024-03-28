import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Categories from './Categories'
import Banner from './Banner'
import Featured from './Featured'
import Banner_mid from './Banner_mid'
import Showcase from './Showcase'
import Blog from './Blog'
import Footer from './Footer'
import Bulk_Form from './Bulk_Form'
import Card_details from './pages/Card_details'






function Layout() {
  return (
    <>
    
    <Nav/>
    <Header />
    <Banner />
    <Categories />
     <Featured />
     <Banner_mid />
     <Showcase />
      <Blog/>
      <Footer />
    </>

  )
}

export default Layout