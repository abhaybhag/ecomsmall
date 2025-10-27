import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router'
import Footer from '../common/Footer'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
    
  )
}
