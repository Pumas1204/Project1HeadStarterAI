import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar(){
   
    return <nav className="nav">
        <Link to="/" className="site-title">AR</Link>
        <ul>
            
        </ul>
    </nav>



}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end : true })
    const path = window.location.pathname
    return (
        <li className= {isActive === to ? "active": ""}>
                <Link to={to} {...props}>
                    {children}</Link>
        </li>

    )
}