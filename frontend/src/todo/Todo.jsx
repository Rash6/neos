import React, { useEffect } from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import {nanoid} from "nanoid"

function Todo() {
  const [ data ,setData ] = useState([])

  useEffect(()=>{
      let getData = async()=>{
     try {
         let res = await fetch("http://localhost:5000");
         let info = await res.json();
         console.log(info)
         setData([...info])
     } catch (error) {
      console.log(error)
     }
      }
      getData();
  },[])

  const addItem = (text)=>{
       setData([...data,text])
  }

  const deleteItem= ()=>{

  }
  return (
    <div>
         <TodoInput  addItem = {addItem}/>
         {data.map((items)=>(
                <TodoItem  items= {items}  delteItem= {deleteItem} id= {nanoid()}/>
         ))}
    </div>
  )
}

export default Todo







