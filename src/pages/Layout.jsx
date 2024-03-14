import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Home from './Home'


export default function Layout() {
    return (
        <>
            <Nav />
            <Home />
            <Outlet />
            <Footer />
        </>
    )
}
