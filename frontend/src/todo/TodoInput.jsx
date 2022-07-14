import React from 'react'
import { useState } from 'react'

function TodoInput({addItem}) {

  const [text,setText] = useState("");

  const handleChange = (e)=>{
      setText(e.target.value)
  }

  const handleClick = async()=>{
      try { 
        let res= await fetch("http://localhost:5000",{
          method: "POST",
          headers: { "content-type" : "application/json"},
          body: JSON.stringify({
            text,
          })
        })
       let data= await  res.json();
    //  console.log(data)
       addItem(data)

      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div>
          <input type= "text" onChange={handleChange}/>
          <button onClick= {handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput