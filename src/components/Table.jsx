{/*
import leo from './public/leo'
import vass from './public/vass'
import grupoDot from './public/grupoDot'
import publicisGroupe from './public/publicisGroupe'
*/}
import publicis from '../assets/publicisGroupe.png'
import vass from '../assets/vass.png'
import dot from '../assets/grupoDot.png'
import leo from '../assets/leo.png'

export default function Table() {
  return (
    <>
      <div className="max-w-md mb-10">
          <p className="pt-1 text-lg opacity-60 tracking-wide text-left">Some</p>
          <h1 className="text-5xl font-bold title">Experience</h1>
      </div>
      <div className="overflow-x-auto mt-10 mb-30">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Job</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={publicis}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Publicis Groupe</div>
                    <div className="text-sm opacity-50">May. 2022 - Oct. 2025</div>
                  </div>
                </div>
              </td>
              <td>
                UI Developer
              </td>
              <td>
                  <span className="badge badge-ghost badge-sm h-auto min-w-75">
                      I worked with clients to gather requirements. I was responsible for user interface (UI) and user experience (UX) design, as well as the subsequent development of projects using front-end technologies as grunt, js, sass, html, email development and testing processes.
                  </span>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={vass}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Vass Latam</div>
                    <div className="text-sm opacity-50">nov. 2019 - mar. 2022</div>
                  </div>
                </div>
              </td>
              <td>
                UX/UI Designer and developer
              </td>
              <td>
                  <span className="badge badge-ghost badge-sm h-auto min-w-75">
                      I focused on web platform design using tools like Sketch, moving on to developing e-commerce sites using front-end technologies as react, js, sass, html and gulp.
                  </span>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={dot}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Grupo Dot</div>
                    <div className="text-sm opacity-50">oct. 2018 - nov. 2019</div>
                  </div>
                </div>
              </td>
              <td>
                  UI / UX Desingner & front End Developer
              </td>
              <td>
                  <span className="badge badge-ghost badge-sm h-auto min-w-75">
                      I worked developing landing pages using technologies like Angular, in addition to designing user interfaces for mobile applications and creating modules with code.
                  </span>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={leo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Leo Burnett</div>
                    <div className="text-sm opacity-50">abr. 2018 - sep. 2018</div>
                  </div>
                </div>
              </td>
              <td>
                UX/UI Developer
              </td>
              <td>
                  <span className="badge badge-ghost badge-sm h-auto min-w-75">
                      I worked on designing websites, emails, and landing pages using XD, as well as translating those design concepts into code using web technologies such as sass, html, js, gulp, and testing processes.
                  </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
