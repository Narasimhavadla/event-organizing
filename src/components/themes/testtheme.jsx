import { NavLink } from "react-router-dom"

export default function TestTheme(){
    return(
        <div className="h-20 p-5">
            <NavLink to="elegant" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Elegant</NavLink>
            <NavLink to="vibrant" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Vibrant</NavLink>
            <NavLink to="corporate" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Corporate</NavLink>
            <NavLink to="modern" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Modern</NavLink>
            <NavLink to="luxuary" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Luxury</NavLink>
            <NavLink to="artistic" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Artistic</NavLink>
            <NavLink to="fairy" className="bg-blue-400 text-white px-2 py-1 rounded m-2">Fairytale</NavLink>
            
        </div>
    )
}