import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from './components/NavbarTest';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Signup from './components/auth/Signup';
import PrivateComp from './components/PrivateComp';
import Login from './components/auth/login';
import ClientManagement from './components/client/ClientManagement';
import FournisseurManagement from './components/fournisseur/FournisseurManagement';
import ArticleManagement from './components/article/ArticleManagement';

const App = () => {
  

  return (
    <Router>
      <div className='App'>
       
        <NavbarTest/>
        <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route element={<PrivateComp/>}>
        <Route path="/logout" element={<h1>Logout</h1>}>
        </Route>
        <Route path="/article" element={<ArticleManagement/>}>
        </Route>
        <Route path="/fournisseur" element={<FournisseurManagement/>}>
        </Route>
        <Route path="/client" element={<ClientManagement/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
        </Route>
        </Routes>
      </div>
      </Router>
    
   
   
  );
};

export default App;
