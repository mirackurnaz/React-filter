import {useState} from 'react'

function List({contact}) {
   
  const[filter,setFilter]=useState('')
   
   const stateFilter=(event)=>{
    setFilter(event.target.value)
   }
   const filtered=contact.filter((item)=>{
    return Object.keys(item).some((key)=>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filter.toLocaleLowerCase())
    );
   });
  return (
    <div className='login-group'>
      <input id='login-control' placeholder='Filtrele' value={filter} onChange={stateFilter}></input>
     <ul>
      {filtered.map((contacts,index)=>(
        <li key={index}>{contacts.fullname}</li>
      )

      )}
     </ul>
    </div>
  )
}

export default List
