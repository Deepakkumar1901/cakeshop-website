import React from "react";
import nav_img from "../asset/nav.png"
import form_img from "../asset/login_1.jpg"
import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'



export function SignUp() {
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:5000/register', { name, email ,mobileNo, password})
    .then(result=>{console.log(result.data)
        navigate('/login')

    })
   .catch (e=>console.log(e.message));
}
  



  return (
    <>
    

    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${form_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center w-full max-w-sm mx-auto">
        <img src={nav_img} alt="Little Berry Logo" className="w-28 mx-auto mb-4" />
        <p className="text-xl mb-4 text-black italic">Create Your New Account</p>
        <form onSubmit={handleSubmit}>
          <input
            className="m-2 p-2 rounded-lg w-full"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br />
          <input
            className="m-2 p-2 rounded-lg w-full"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            className="m-2 p-2 rounded-lg w-full"
            type="text"
            placeholder="Mobile No"
            onChange={(e) => setMobileNo(e.target.value)}
          /><br />
          <input
            className="m-2 p-2 rounded-lg w-full"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <input
            type="submit"
            className="m-2 p-2 rounded-full bg-rose-500 text-white w-full cursor-pointer"
            value="Sign Up"
          /><br />
          <p>Already have an Account?</p>
          <Link to="/login">
            <input
              type="button"
              className="m-2 p-2 rounded-full bg-rose-500 text-white w-full cursor-pointer"
              value="Login"
            />
          </Link>
        </form>
      </div>
    </div>
    </>
  );
}