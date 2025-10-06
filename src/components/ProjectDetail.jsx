import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "./Carousel"
import React, { useEffect, useRef } from 'react';


export default function ProjectDetail(){

    const projectRef = useRef(null);

    const location = useLocation()
    const project = location.state?.project;

    if(!project){
        return <p>No se encontró iformación del proyecto...</p>
    }

    useEffect(() => {
        if(projectRef.current){
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    return(
        <>
                <div ref={projectRef} className="hero-content flex flex-col">
                    {/*<div className="w-full">
                        <Link to={`/`} state={{ project }} className="link">Go back</Link>
                    </div>*/}
                    <div>
                        {/*<img src={project.title.image} className="w-full rounded-lg shadow-2xl mb-25" />
                        <h1 className="text-5xl font-bold mb-10 title">{project.title.name}</h1>

                        <div className="py-2 mb-10">
                            <strong>
                                {project.heading_1}
                            </strong>
                            <p className="py-2">
                                {project.description_1}
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-30">
                            <div>
                                <strong>
                                    {project.caption_2}
                                </strong>
                                <p className="py-2">
                                    {project.description_2}
                                </p>
                            </div>
                            <div>
                                <strong>
                                    {project.caption_3}
                                </strong>
                                <p className="py-2">
                                    {project.description_3}
                                </p>
                            </div>
                        </div>

                        <strong>
                            {project.caption_4}
                        </strong>
                        <p className="py-2 mb-10 italic">
                            {project.description_4}
                        </p>*/}

                        <div className="">{/* mt-8 columns-2 md:columns-3 gap-4 space-y-4 mb-30 */}
                            {project.images_group?.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`project-${project.id}-img-${index}`}
                                    //className="w-full mb-4 break-inside-avoid"
                                />
                            ))}
                        </div>

                        <div className="w-full mt-5">
                            <Link to={`/`} state={{ project }} className="link link-info"> {`< Go back`}</Link>
                        </div>

                    </div>
                </div>

                {/*<Carousel images={project.images_group}/>*/}
        </>
    )
}