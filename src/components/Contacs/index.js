import {useState,useEffect} from 'react'
import List from './list'
import Form from './form'
import "./style.css"
function Contacts() {
  const [contact,setVeriler]=useState([]);
  useEffect(()=>{
    console.log(contact);

  },[contact]);

  return (
    <div id='container'>
      <h1>My-Project</h1>
     <List contact={contact}/>
     <Form addContact={setVeriler} contact={contact} />
    </div>
  )
}

export default Contacts
