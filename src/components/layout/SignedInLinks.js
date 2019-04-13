import  React  from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../redux-store/actions/authActions";


// [My Contacts], [logout]
const SignedInLinks = (props)=> {
    const {signOut, currentUser} = props
    return(
        <ul className="nav navbar-nav navbar-right">
            <li><NavLink to="/"> My Contacts </NavLink> </li>
            <li>
                <ul class="menu">
                    <li>
                        {currentUser.displayName}
                        <ul>
                            <li>My Profile</li>
                            <li>Settings</li>
                            <li><a onClick={signOut}>Log Out</a> </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}


export default connect(null, {signOut})(SignedInLinks);
