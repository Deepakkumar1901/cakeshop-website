import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import { Hanimeli } from './component/bakeshop';
import {LoginUser, SignUp} from './component/signup';
import Protect  from './component/protect';
import {Login} from './component/Login';
import FileUpload from './component/upload'
import About from './component/about';
import Home from './component/home';
import Ordernow from './component/ordernow';
import Nav from './component/nav';





function App() {
  // const [sidebartoggale,setsidebartoggale]=useState(false)

  return (
    <>
   
    <Nav/>
    
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route element={<Protect />}>
        
        
          <Route path='/home' element={<><Home /> </>} />
          <Route path='/ordernow' element={<Ordernow />} />
          <Route path='/about' element={<About />} />
        
      </Route>
    </Routes>



      </>  
  );
}

export default App;
