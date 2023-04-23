import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage'
import HomePage from '../Pages/HomePage/HomePage'
import SkillsPage from '../Pages/SkillsPage/SkillsPage'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <>
    <BrowserRouter>   
        <Routes>
            <Route element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter