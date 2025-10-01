import React, { useEffect, useState } from "react";

export default function Coding(){

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("https://api.github.com/users/arley-cuadrado/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener repositorios:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando repositorios...</p>;
  }

    return(
        <>
            <div className="max-w-md mb-10">
                <p className="pt-1 text-lg opacity-60 tracking-wide text-left">See some of my </p>
                <h1 className="text-5xl font-bold title">Web projects</h1>
            </div>
            <div className="mockup-browser mb-30 bg-base-200">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://github.com/arley-cuadrado?tab=repositories</div>
                </div>
                <div className="grid place-content-center border-t border-base-300 h-20"></div>

                <div className="mb-20 mr-10 ml-10">
                {
                    <ul className="rounded-box w-full flex flex-wrap md:flex-wrap"> {/* flex flex-col md:flex-row */}
                        {repos.map((repo) => (
                        <li
                            key={repo.id}
                            className="list-row w-90 mb-5"
                        >
                            <h2>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none"}}
                                    className="text-sm"
                                >
                                    {repo.name}
                                </a>
                            </h2>
                            <p className="opacity-50 badge badge-ghost badge-sm h-auto pl-0">{repo.description || "Sin descripción disponible"}</p>
                        </li>
                        ))}
                        <div className="divider"></div>
                    </ul>
                }
                </div>
            </div>
        </>
    )
}