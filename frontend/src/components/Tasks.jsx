import React, { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

function Tasks() {
    const [user, setUser] = useState({})
    const [data,setData] = useState([])
    const userId= JSON.parse(localStorage.getItem("userId"))
    const navigate= useNavigate();
  
    useEffect(()=>{
       getData();
      if(!userId){
       navigate("/login")
      }
    },[userId])

    const getData = async()=>{
        try {
            let res = await fetch(`https://taskdeployment.herokuapp.com/user/${userId}/tasks`);
            let info= await res.json();
            setData([...info])
            console.log(data)
          //  console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e)=>{
        let inputName= e.target.name;
        
        setUser({
          ...user,
          [inputName] : e.target.value
        })
    }
    const handleClick = async()=>{
        try {
            let res = await fetch(`https://taskdeployment.herokuapp.com/user/${userId}/tasks`,{
              method: "post",
              headers : {"content-type" : "application/json"},
              body: JSON.stringify({
               title: user.title
              })
            })
         
            let data= await res.json();
            console.log(data)
            getData()
           } catch (error) {
            console.log(error)
           }
    }

  return (
    <div>
        <input type= "text" name= "title" placeholder='Enter Tasks' onChange= {handleChange}/>
        <button onClick={handleClick}>Add Tasks</button>
         {data.map((ele)=>{
            return <div key= {ele._id}>
               <h4>{ele.title}</h4>
               <button>Toggle</button>
               <button>Delete</button>
            </div>
})}
    </div>
  )
}

export default Tasks