
import { useState } from 'react'

function Form({addContact,contact}) {
    const [form,setForm]=useState({fullname:"",number:""})
    const formState=(event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }
   
    const onSubmit=(event)=>{
        event.preventDefault();

        if (form.fullname==="" || form.number==="") {
            return false;
            
        }
       
       
        
        addContact([...contact,form])
        setForm({fullname:"",number:""})
        
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="login-group">
            <input id='login-control' name='fullname' onChange={formState} placeholder='Name' value={form.fullname}></input>
            </div>

        <div className="login-group">
        <input id='login-control' name='number' onChange={formState} placeholder='Phone' value={form.number}></input>
        </div>

        <div className="login-group"> 
            <button>click</button>
        </div>


   
     
    
    </form>
    
  )
}

export default Form
