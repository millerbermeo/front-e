import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Nav from '../components/Nav'

const MainLayout: React.FC = () => {
    return (
        <main className='w-full min-h-screen bg-[#F5F5F5]'>
            <Topbar />
            <Nav />
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainLayout