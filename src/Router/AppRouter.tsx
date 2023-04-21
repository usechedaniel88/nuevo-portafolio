import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import ContactPage from '../Pages/ContactPage/ContactPage'
import HomePage from '../Pages/HomePage/HomePage'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <>
    <BrowserRouter>   
        <Routes>
            <Route element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter