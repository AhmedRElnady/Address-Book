import React from "react";
import ContactCard from "./ContactCard";
import _ from 'lodash';

const ListContacts = (props) => {
    const { contacts, delContactFun, uid } = props;
    
    return (    
        <div className="container pagecontainer">
                <div className="dev-center">
                    {contacts && _.map(contacts, (contact, contactId) => {
                        contact.id = contactId;
                        return (
                            <ContactCard contact={contact} delContactFun={delContactFun} uid={uid}/>
                        )
                    })}
                </div>  
        </div>    
    )
}

export default ListContacts;