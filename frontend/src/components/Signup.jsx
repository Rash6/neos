import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({})
    const navigate= useNavigate()

    const handleChange = (e)=>{
        let inputName= e.target.name;
  
        setFormData({
          ...formData,
          [inputName] : e.target.value
        })
    }
    const handleSignup = async ()=>{
        // const {data} = await axios.post("http://localhost:5000/auth/login", formData)
        // console.log(data)
         try {
          let res = await fetch("http://localhost:5000/auth/signup",{
            method: "post",
            headers : {"content-type" : "application/json"},
            body: JSON.stringify({
               formData
            })
          })
         let data= await res.json();
        let id= data.user._id;
        console.log(id)
        localStorage.setItem("userId", JSON.stringify(id))
        navigate("/login")
          
         } catch (error) {
          console.log(error)
         }
      }
  return (
    <div>
    <input type= "Text" name= "name" placeholder='Enter Name' onChange= {handleChange}/>
    <input type= "Text" name= "username" placeholder='Enter Username' onChange= {handleChange}/>
    <input type= "Text" name= "email" placeholder='Enter Email' onChange= {handleChange}/>
    <input type= "Text" name= "password" placeholder='Enter Password' onChange= {handleChange}/>
    <input type= "Text" name= "mobile" placeholder='Enter Mobile Number' onChange= {handleChange}/>
    <button onClick={handleSignup}>Signup</button>
</div>
  )
}

export default Signup