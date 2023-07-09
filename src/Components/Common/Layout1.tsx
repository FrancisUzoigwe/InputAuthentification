import React from 'react'
import Header1 from './Header1'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div>
      <Header1/>
      <Outlet/>
    </div>
  )
}

export default Layout1
