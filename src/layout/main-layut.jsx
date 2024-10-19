import React from 'react'
import Header from "./header.jsx"
import HeroSection from '../components/hero/hero.jsx'
export const MainLayout = () => {
  return (
  <div>
    <header>
     <Header/>
    </header>
     <section>
        <HeroSection/>
     </section>
  </div>
  )
}
