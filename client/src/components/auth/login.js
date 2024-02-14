import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const  [email, setEmail]= React.useState('')
    const  [password, setPassword]= React.useState('')
    const navigate=useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user');
    
    
        if (auth) {
        navigate('/')
        }
      },[])

    const handleLogin=async ()=>{
        console.warn(email,password)
        let result= await fetch('http://localhost:3000/auth/login',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        result =await result.json();
        console.warn(result.payload.firstName)

        if(result.token)
        {
            localStorage.setItem('user',JSON.stringify(result.payload));
            localStorage.setItem('token',JSON.stringify(result.token));

             navigate('/')
        }else { alert("entrez les details")}
    }

    return(
        <div>
             <h1>Login</h1>
            <div className="login">
           
            <input className="inputBox" type="text" placeholder="entrer l'email" 
             value={email} onChange={(e)=>setEmail(e.target.value)}  name="email"/>
            <input className="inputBox" type="password" placeholder="entrer le password" 
             value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/>
            <button  onClick={handleLogin} className="appButton" type="button">Connexion</button>
        </div>
        </div>
       
    )
}

export default Login;