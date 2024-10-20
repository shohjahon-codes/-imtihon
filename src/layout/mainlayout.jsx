import React from 'react'
import Navbar from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'


export const Mainlayout = () => {
  return (
    <div>
       <div><Navbar/></div>
       <div><Outlet/></div>
       <div><Footer/></div>

       
    </div>

  )
}
