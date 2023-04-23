import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../Menutop/Menutop'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'


type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <Banner/>
    <ResponsiveAppBar/>
        <main>
            <Outlet/>
        </main>
    <Footer/> 
    </>
  )
}

export default Layout