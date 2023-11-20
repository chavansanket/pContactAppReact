import React,{useState,useEffect} from 'react'; //importing react library
import {BrowserRouter as Router, Switch,Route, Routes} from 'react-router-dom';
import {v4 as uuid} from 'uuid';//provide unique id
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


//default functional component created by react
function App() {
  const L_S_Key = "contacts";
  // const [contacts,setContacts]= useState([]); 
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(L_S_Key)) ?? []
    // This ensures that the contact data is loaded from localStorage when the 
    // component first mounts and is not overwritten with an empty array.
  );

  const addContactHandler =(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}]);
  }

  

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return  contact.id !==id;
    }); 
  
    setContacts(newContactList);
  } //pass this handler to the contactList

  

  useEffect(()=>{  
    localStorage.setItem(L_S_Key,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      
        <Header/>
   
      {/* <Router> */}
        {/* <Route path='/add' Component={AddContact}/> */}
        {/* <Route path='/' Component={ContactList} /> */}
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList   contacts={contacts} getContactId={removeContactHandler}/>
      {/* </Router> */}
    
    
    </div>
  );
}

export default App;
