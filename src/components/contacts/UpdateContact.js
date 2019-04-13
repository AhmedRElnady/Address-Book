import React, { Component } from "react";

class UpdateContact extends Component{
    render() {
        return (
            <div className="container-fluid">
                <h2> Refactor:</h2>
                <h6> use a signle componet for both add/edit and switch mode, based checking :id existence</h6>
            </div>
        )
    }
}

export default UpdateContact;