import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const Signup=()=>{

    const  [firstName, setNom]= useState("")
    const  [lastName, setPrenom]= useState("")
    const  [email, setEmail]= useState("")
    const  [password, setPassword]= useState("")
    let Navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
    
    
        if (auth) {
        Navigate('/')
        }
      },[])


    const collectData=async ()=>{
        console.warn(firstName,lastName,email,password)

        let result= await fetch('http://localhost:3000/user/signUp',{
            method: 'POST',
            body: JSON.stringify({firstName,lastName,email,password}),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        result =await result.json();
        console.warn(result)
        localStorage.setItem('user',JSON.stringify(result.user))
        localStorage.setItem('token',JSON.stringify(result.token))


        if(result)
        {
            Navigate('/')
        }
    }


    return(
        <div>
            <h1 >Register</h1>
            <div className="register">
            <input className="inputBox" type="text" placeholder="entrer le nom" 
            value={firstName} onChange={(e)=>setNom(e.target.value)} name="firstName"/>
            <input className="inputBox" type="text" placeholder="entrer le prénom" 
            value={lastName} onChange={(e)=>setPrenom(e.target.value)} name="lastName"/>
            <input className="inputBox" type="text" placeholder="entrer l'email" 
            value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/>
            <input className="inputBox" type="password" placeholder="entrer le password" 
            value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/>
            <button onClick={collectData} className="appButton" type="button">S'inscrire</button>
        </div>
        </div>
        
    )
}

export default Signup;