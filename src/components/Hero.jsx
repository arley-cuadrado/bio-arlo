import React, { useRef } from 'react';
import arlo from '/assets/me.jpg'

export default function Hero( {biography} ){

    const targetRef = useRef(null);

    const scrollToTarget = () => {
        if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <div className="hero bg-base-200 min-h-screen mb-10">
            <div className="hero-content text-center flex flex-col">
                    <div className="max-w-md">
                        <h1 className="font-bold text-left text-base text-8xl main-title-mb">Hello thereeee!</h1> {/* text-base   flex flex-col md:flex-row */}
                        <div className="max-w-md">
                            <ul className="list rounded-box mb-5">
                                <li className="list-row">
                                    <div><img className="size-10 rounded-full" src={arlo}/></div>
                                    <div>
                                    <div className="text-left title-intro">
                                        <p>{biography.bio.name} {biography.bio.lastname} here, a <button onClick={scrollToTarget} className='tooltip padding-0' data-tip="What is this?"> <span className='title'>T-shape Developer</span></button> {biography.profession.description}</p>
                                    </div>
                                        <p className="pt-1 text-xs opacity-60 tracking-wide text-left"></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tooltip">
                            <div className="tooltip-content">
                                <div className="animate-bounce text-white-400 -rotate-10 text-2xl font-black">scroll down!</div>
                            </div>
                            <button className="btn" onClick={scrollToTarget}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={targetRef} />

        </>
    )
}