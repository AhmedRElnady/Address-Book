import React from "react";
import { Link } from "react-router-dom";
import ContactPicture from "./ContactPicture";

class ContactCard extends React.Component {

    render() {
        const currentUser = this.props.uid,
            contactDetails = this.props.contact;

        return (
            <div className="container-fluid">

                <div class="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title"> {contactDetails.name}</h3>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <ContactPicture pictureUrl={contactDetails.picture} />
                            </div>

                            <div className="col-sm-12 col-md-3">
                                <p className="card-text"> {contactDetails.address}</p>
                            </div>

                        </div>


                        {/* only show it to its owner   */}

                        {contactDetails.uid === currentUser && (
                            <div className="row">
                                <br />
                                <label className="col-sm-2 control-label"></label>
                                <div className="col-sm-5">
                                    <button className="btn btn-danger" onClick={() => this.props.delContactFun(contactDetails.id)}>Delete</button>
                                    <button className="btn primary">
                                        <Link to={`/contacts/${contactDetails.id}`}> Edit </Link>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="row">
                            <div className="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }


}

export default ContactCard;