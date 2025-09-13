import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet/> {/* this component to enable routing operations as be defined  */}
            <Footer/>
        </main>
    )
}

export default Layout