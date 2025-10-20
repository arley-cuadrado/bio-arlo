import React,{ useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Work from './components/Work'
import Coding from './components/Coding'
import Table from './components/Table'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectDetail from './components/ProjectDetail'
import Layout from "./components/Layout"
import Toggle from "./components/Toggle"
import useLocalStorage from "use-local-storage"
import 'animate.css';

function App() {
  const [ info, setInfo ] = useState([])
  const [ isDark, setIsDark ] = useLocalStorage("isDark", false);

  useEffect(()=>{
    fetch("bio-info.json")
    .then(response => response.json())
    .then(data => setInfo(data))
  },[])

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Routes>
        {/* Landing completa */}
        <Route
          path="/"
          element={
            <Layout>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
                theme={isDark}
              />
              <ul>
                {

                  info?.bio?.map((item) =>{
                    return <Hero key={item.id} biography={item} />
                  })
                }
              </ul>
              <div className='sm:flex-none lg:flex justify-center g-padding'>
                <main className='sm:w-auto md:w-auto lg:w-250'>
                  <Introduction />
                  <Table dataTheme={isDark}/>
                  <Work />
                  <Coding />
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
    </div>
  )
}

export default App
