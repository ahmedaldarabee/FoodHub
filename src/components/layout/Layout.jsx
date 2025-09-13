import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileMenu from '../mobileMenu/MobileMenu'

const Layout = () => {
    return (
        <>
            <MobileMenu/>
            <Navbar/>
                <Outlet/> {/* this component to enable routing operations as be defined  */}
            <Footer/>
        </>
    )
}

export default Layout