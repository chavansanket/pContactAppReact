import React from "react";

class AddContact extends React.Component{
    state ={
        name: "",
        email:"",
    }

    add = (e)=>{
        e.preventDefault();//prevents the default form submission behavior, 
        //which would normally cause the page to refresh.
        if(this.state.name ==="" || this.state.email===""){
            alert("All the fields are mandatory !");
             return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email: ""}); 
        console.log("in addContact component , add method");
        console.log(this.state);
        
        debugger
    }

    render(){
        return(
            <div className="ui main">
                <br/>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e)=>this.setState({name:e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e)=>this.setState({email:e.target.value})}

                            />
                    </div>
                    <button className="ui button blue" >Add</button>

                </form>
            </div>
        );
    }
}
export default AddContact;