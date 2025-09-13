import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Fragment>
            <Navbar/>
            <Outlet/> {/* this component to enable routing operations as be defined  */}
            <Footer/>
        </Fragment>
    )
}

export default Layout