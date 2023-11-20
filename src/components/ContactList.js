import React from "react";
import ContactCard from  "./ContactCard";

function ContactList(props) {
    console.log(props);
    const {contacts}=props;

    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }; 
    
    return (
        <div className="ui called list">
            <h2>Contact List</h2>
            <ContactCard contacts={contacts} clickHandler={deleteContactHandler} key={contacts.id}/>
            {/*  clickHandler is passing to from inner child (contactCard) to its parent(contactList) and from parent to its parent(app.js) */}
            {/* <ul>
                {contacts.map((contact)=>(
                    <li key={contact.id}>{contact.name}</li>
                ))}

            
            </ul> */}
        </div>
    );
}
export default ContactList;
