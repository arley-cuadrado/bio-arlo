import React,{ useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Work from './components/Work'
import Coding from './components/Coding'
import Table from './components/Table'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectDetail from './components/ProjectDetail'
import Layout from "./components/Layout"

function App() {
  const [ info, setInfo ] = useState([])

  useEffect(()=>{
    fetch("bio-info.json")
    .then(response => response.json())
    .then(data => setInfo(data))
  },[])

  return (
    <>
      <Routes>
        {/* Landing completa */}
        <Route
          path="/"
          element={
            <Layout>
              <ul>
                {

                  info?.bio?.map((item) =>{
                    return <Hero key={item.id} biography={item} />
                  })
                }
              </ul>
              <Navbar />
                <div className='flex justify-center'>
                  <main className='sm:w-auto md:w-auto lg:w-250'>
                    <Introduction />
                    <Table />
                    <Work />
                    <Coding />
                    {/*<Footer />*/}
                  </main>
                </div>
            </Layout>
          }
        />

        {/* Solo detalle + footer */}
        <Route
          path="/projects/:id"
          element={
            <Layout>
              <div className='flex justify-center'>
                <main className='w-250'>
                  <ProjectDetail />
                </main>
              </div>
            </Layout>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
