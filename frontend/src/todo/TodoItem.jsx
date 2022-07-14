import React from 'react'
import { useState } from 'react'

function TodoItem({items , deleteItem,id}) {
  const [inp,setInp] = useState(false)
  const [value,setValue] = useState("")
   const handleClick = async()=>{
        let res= await fetch(`http://localhost:4000/${id}`,{
          method: "DELETE",
          headers: {"content-type" : "application/json"},
        })
   }

   const patchReq= async()=>{
    let res= await fetch(`http://localhost:4000/${id}`,{
      method: "PATCH",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify({
          text: value
      })
    })
   }
   const handleClick2 = async()=>{
     setInp(!inp)
    patchReq();
}


  return (
    <div>
    {inp ? <div>
          <input type="text" oonChnage= {(e) => setValue(e.target.value)}/>
          <button>Submit</button>
    </div> :  <div>
      <li>{items}</li>
      <button onClick= {handleClick}>delete</button>
      <button onClick= {handleClick2}>Edit</button>
  </div>}
  </div>
  )
}

export default TodoItem