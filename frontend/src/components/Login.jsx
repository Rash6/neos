import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({})
  const userId= JSON.parse(localStorage.getItem("userId"))
  const navigate= useNavigate()

  const handleChange = (e)=>{
      let inputName= e.target.name;

      setFormData({
        ...formData,
        [inputName] : e.target.value
      })
  }

  const handleLogin = async ()=>{
    // const {data} = await axios.post("http://localhost:5000/auth/login", formData)
    // console.log(data)
     try {
      let res = await fetch("http://localhost:5000/auth/login",{
        method: "Post",
        headers : {"content-type" : "application/json"},
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      })
     let data= await res.json();
      // console.log(data[0]._id)
      console.log(userId)
      if(userId){
        navigate("/tasks")
      }
     } catch (error) {
      console.log(error)
     }
  }
  return (
    <div>
        <input type= "Text" name= "username" placeholder='Enter Username' onChange= {handleChange}/>
        <input type= "Text" name= "password" placeholder='Enter Password' onChange= {handleChange}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login