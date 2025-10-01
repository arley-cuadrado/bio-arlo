import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

export default function Work(){

    const [ proj, setProj ] = useState([])

      useEffect(()=>{
        fetch("/bio-info.json")
        .then(response => response.json())
        .then(data => setProj(data))
      },[])

    return(
        <div>
            <div className="max-w-md mb-10">
                <p className="pt-1 text-lg opacity-60 tracking-wide text-left">See some of my </p>
                <h1 className="text-5xl font-bold title">UI projects</h1>
            </div>
            <section className='flex flex-wrap justify-between mb-30'>

              {
                proj?.projects?.map((proj) => {
                  return <Card key={proj.id} project={proj}/>
                })
              }
            </section>
        </div>
    )
}
