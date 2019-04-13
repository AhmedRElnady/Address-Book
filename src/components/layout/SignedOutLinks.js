import  React  from "react";
import { NavLink } from "react-router-dom";


// [login]
const SignedOutLinks = ()=> {
    return(
        <ul className="nav navbar-nav navbar-right">
            <li> <NavLink to="/signup" > Sign Up </NavLink></li>
            <li> <NavLink to="/signin" > Sign In </NavLink></li>    
        </ul>
    )
}

export default SignedOutLinks;
