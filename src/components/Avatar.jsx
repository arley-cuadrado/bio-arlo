export default function Avatar(){
    return(
        <>
        <ul className="list bg-base-100 rounded-box shadow-md">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

        <li className="list-row">
            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
            <div>
            <div>Arlo Cuadrado</div>
            <div className="text-xs uppercase font-semibold opacity-60">UX/UI Engineer</div>
            </div>
            <p className="list-col-wrap text-xs">
            "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
            </p>
        </li>
        </ul>
        </>
    )
}