export default function Footer(){
    return(
        <>
        <div className="divider"></div>

            <div className="card w-full bg-base-100 mb-5 pt-20 pb-20"> {/*card-xs shadow-sm*/}
                    <div className="grid place-content-center">


                        <div className="max-w-md mb-10 text-center">
                            <h1 className="text-2xl font-bold title">Personal information</h1>
                            <p className="pt-1 text-lg opacity-60 tracking-wide mb-15">Here you can contact me</p>

                            <ul className="list bg-base-100 rounded-box ">

                                <li className="list-row flex justify-between">
                                    <div>
                                        <div className="text-left">Phone number</div>
                                    </div>
                                    <div>
                                        <div className="text-right">+57 310 364 4977</div>
                                    </div>
                                </li>

                                <li className="list-row flex justify-between">
                                    <div>
                                        <div className="text-left">Email</div>
                                    </div>
                                    <div>
                                        <div className="text-right"><a href="mailto:arley.cuadrado@icloud.com">arley.cuadrado@icloud.com</a></div>
                                    </div>
                                </li>

                                <li className="list-row flex justify-between">
                                    <div>
                                        <div className="text-left">LinkedIn</div>
                                    </div>
                                    <div>
                                        <div className="text-right"><a href="https://www.linkedin.com/in/arley-cuadrado/" target="_blank">https://www.linkedin.com/in/arley-cuadrado/</a></div>
                                    </div>
                                </li>

                                {/*<li className="list-row flex justify-between">
                                    <div>
                                        <div>Behance</div>
                                    </div>
                                    <div>
                                        <div><a href="https://www.behance.net/arleycuadr1d37" target="_blank">https://www.behance.net/arleycuadr1d37</a></div>
                                    </div>
                                </li>*/}

                            </ul>
                        </div>

                    </div>
            </div>
        </>
    )
}