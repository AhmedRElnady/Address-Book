import  React  from "react";
import { NavLink } from "react-router-dom";

// [home], [About]
const GlobalLinks = ()=> {
    return(
        <ul className="nav navbar-nav">
            <li> <NavLink to="/home" > Home  </NavLink></li>
            <li> <NavLink to="/about" > About </NavLink></li>
        </ul>
    )
}

export default GlobalLinks;
