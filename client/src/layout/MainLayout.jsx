import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet></Outlet>  {/*component to render children */}
        </div>
    </div>
  )
}

export default MainLayout