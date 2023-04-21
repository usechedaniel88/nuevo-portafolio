import React from 'react'
import { Outlet } from 'react-router-dom'
import NavTop from '../Navtop/Navtop'
import Footer from '../Footer/Footer'


type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <NavTop/>
        <main>
            <Outlet/>
        </main>
    <Footer/> 
    </>
  )
}

export default Layout