import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import Test from "./Test"
import Footer from "./Footer"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import 'bootstrap/dist/js/bootstrap.min.js'
import '../pages/css/bootstrap.min.css'
import '../pages/css/nouislider.min.css'
import '../pages/css/slick-theme.css'
import '../pages/css/slick.css'
import '../pages/css/style.css'
import { navigate } from "@reach/router"
export default function Layout({
  
  children
}) {
  if (typeof window !== 'undefined') {
    /* place entire p5 here */
  }
  const [searchQuery, setSearchQuery] = React.useState( '');
  function searchData(){

    navigate('/Store?s='+searchQuery);
  }
  return (
      <>

        <Header 
         
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
         searchData={searchData}
        />
        
        {/* <Navbar/> */}
        <Test/>
        {children}
        <Footer/>
      </>
  )
}
