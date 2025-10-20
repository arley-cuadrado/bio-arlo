import tShaped from '/assets/t-shaped.png'
import html from '/assets/html.png'
import css from '/assets/css.png'
import js from '/assets/js.png'
import figma from '/assets/figma.png'
import xd from '/assets/xd.png'
import '../App.css'

export default function Introduction(){

    return(
        <>
            <div className="hero bg-base-200 mb-10 gradientBg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={tShaped}
                    className="max-w-sm rounded-lg"
                    />
                    <div>
                        <h1 className="font-bold text-2xl animate__animated animate__fadeIn">What is a T-shaped?</h1>
                        <p className="py-3">
                            A T-shaped Developer is a professional with a broad foundation across different areas and deep specialization in a specific discipline. 
                            In this case, it refers to a Computer Engineer specialized in <strong>Frontend</strong>, with experience in <strong>UX/UI Design</strong>. This combination makes 
                            it possible to integrate the logic of development with the sensitivity of design, creating functional, scalable interfaces that are also centered on the user experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mb-30 flex flex-col md:flex-row'>{/* sm:flex-col md:flex-col  */}
                <div className='mb-10   '>
                    <strong className="text-2xl mr-15">Skills & Tools</strong>
                    <p>
                        My experience as a Frontend Engineer is built on strong foundations in HTML, CSS, and JavaScript, 
                        which allow me to create responsive, accessible, and scalable web sites, emails, landing pages. Alongside my technical 
                        expertise, I also work with leading UX/UI design tools such as Figma and Adobe XD, where I design user-centered 
                        interfaces and prototypes that connect seamlessly with development.
                        <br className='mb-2'/>
                        This combination of engineering and design skills enables me to move fluidly between prototyping, design validation, 
                        and implementation, ensuring that the final product is both visually appealing and technically robust.
                    </p>
                </div>
                <div className="mr-10"></div>
                <div>
                    <div className='flex mb-5 items-center'>
                        <img src={html} alt="html" className='size-7 mr-3'/>
                        <progress className="progress progress-success w-56" value={90} max="100"></progress>
                    </div>
                    <div className='flex mb-5 items-center'>
                        <img src={css} alt="html" className='size-7 mr-3'/><progress className="progress progress-success w-56" value={80} max="100"></progress>
                    </div>
                    <div className='flex mb-5 items-center'>
                        <img src={js} alt="html" className='size-7 mr-3'/><progress className="progress progress-success w-56" value={60} max="100"></progress>
                    </div>
                    <div className='flex mb-5 items-center'>
                        <img src={figma} alt="html" className='size-7 mr-3'/>
                        <progress className="progress progress-success w-56" value={80} max="100"></progress>
                    </div>
                    <div className='flex mb-5 items-center'>
                        <img src={xd} alt="html" className='size-7 mr-3'/><progress className="progress progress-success w-56" value={70} max="100"></progress>
                    </div>
                </div>
            </div>
        </>
    )
}