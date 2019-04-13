import  React  from "react";
import { Link } from "react-router-dom";
import GlobalLinks from "./GlobalLinks";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";




const Navbar = (props)=> {
    const {auth} = props;
    const linksToDisplay = auth.uid ? <SignedInLinks currentUser={auth} /> : <SignedOutLinks />

    return(


        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">  

                <div className="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                    </button>

                    <Link to={auth.uid ? '/': '/signin'} className="navbar-brand"> MSD Address Book </Link>
                </div>

                <GlobalLinks />
                {linksToDisplay}
                
            </div>
        </nav>        
    )
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
