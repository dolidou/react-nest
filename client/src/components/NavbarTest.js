import React, {} from "react";
import { Link , useNavigate} from "react-router-dom";

const NavbarTest =() =>{

  
    const auth = localStorage.getItem('user');
    const navigate =useNavigate();

    const logout = ()=>{
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
          { auth ?  <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/client">Client</Link></li>
                <li><Link to="/fournisseur">Fournisseur</Link></li>
                <li><Link to="/article">Article</Link></li>
                <li><Link onClick={logout} to="/login">logout</Link></li>
            </ul>:
            <ul className="nav-ul navright">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
}
        </div>
    
    )

}

export default NavbarTest;