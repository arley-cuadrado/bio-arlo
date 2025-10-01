import { Link } from "react-router-dom";

export default function Card({ project }){
    return(
        <div className="bg-base-200 card w-full xs:w-auto md:w-fullauto lg:w-80 bg-base-100 card-xs shadow-sm mb-5">
            <div className="card-body flex flex-row">
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={project.title.image} />
                    </div>
                </div>
                <div>
                    <h2 className="card-title mb-2">{project.title.name}</h2>
                    <p className="line-clamp-2">{project.title.description}</p>
                    <div className="justify-start card-actions mt-2">
                        <Link
                            to={`/projects/${project.id}`}
                            state={{ project }}
                            className="link underline"
                        >
                            See more details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}