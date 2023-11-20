import React from "react";
import user from "../images/user.png";

function ContactCard(props) {
    const {contacts}=props;

    return (
        <div className="item">
            <div className="content">
                <ul>
                    {contacts.map((contact)=>{
                        const {id,name,email}=contact; //destructuring the contact
                        return(
                            <>
                            <li key={id}>
                                <img className="ui avatar image" src={user} alt="user" />
                                <br/>
                                <div>Name : 
                                {name}<br/>
                                Email: {email}
                                <i
                                    className="trash alternate outline icon"
                                    style={{color: "red",marginTop:"7px",marginLeft:"50px"}}
                                    onClick={()=> props.clickHandler(id) } 
                                ></i>
                                <br/>
                                </div>
                                
                            </li>
                            <br/>
                            </>
                            
                        );
                    })

                    }
                </ul>
            </div>
        </div>
    );
}
export default ContactCard;