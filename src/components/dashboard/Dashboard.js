// this a container component, connect it to the store, 
// and send needed data and functions to the contained (nested) components

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import CreateContact from "../contacts/CreateContact";
import ListContacts from "../contacts/ListContacts";

import { createContact, getContacts, deleteContact } from "../../redux-store/actions/contactActions";
import _ from "lodash";


class Dashboard extends Component {

    componentDidMount(){
        this.props.getContacts();
      }

    render() {
        
        const {auth, contacts, saveContact, deleteContact } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        
            return (
                <div className="dashboard container"> 
                    <div className="row">
                        <CreateContact saveContactFun={saveContact} uid={auth.uid}/>
                    </div>
                    
                    {_.isEmpty(contacts)? (<div>Loading...</div>) : (
                        <div className="row">
                            <ListContacts contacts={contacts} delContactFun={deleteContact} uid={auth.uid}/>
                        </div>
                    )}
    
                </div>
            )
        } 
}

const mapStateToProps = (state)=> {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        contacts: state.contacts
    }
}
// https://hackernoon.com/why-using-nested-connect-react-redux-components-is-good-bd17997b53d2
const mapDispatchToProps = dispatch => {
    return {
      saveContact: (contact) => dispatch(createContact(contact)),
      getContacts: ()=> dispatch(getContacts()),
      deleteContact: (contactId)=> dispatch(deleteContact(contactId))
    }
  }

// map our state from the store to props in this component
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
