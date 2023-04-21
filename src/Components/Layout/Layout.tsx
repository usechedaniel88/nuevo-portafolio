import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../Navtop/Navtop'
import Footer from '../Footer/Footer'


type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <ResponsiveAppBar/>
        <main>
            <Outlet/>
        </main>
    <Footer/> 
    </>
  )
}

export default Layout