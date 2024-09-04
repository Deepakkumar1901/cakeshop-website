import React from "react";
import nav_img from "../asset/nav.png"
import form_img from "../asset/login_1.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Protect from  './protect';



export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
   



 
   axios.defaults.withCredentials = true;

    const handleSubmit = async(e) => {
        e.preventDefault();
//
try {
  const response = await axios.post('http://localhost:5000/login', { email, password });
  const { token } = response.data;

  if (token) {
    localStorage.setItem('token', token);
    navigate('/home'); // Redirect to protected home route
    
  
  } else {
    setError('Login failed');
  }
} catch (error) {
  setError(error.response.data.message || 'An error occurred');
}


//
    }

    return(
      <>
    

      <div className="bg-white bg-opacity-10  p-8 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${form_img})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
    
      <div className="">
      
      {/* <img src={nav_img} alt="Little Berry Logo" className="w-28 mx-auto mb-4 ml-1 mt-0 " /> */}
      
       
           <div className="">
              {/* <p className="text-2xl  italic ml-26 ">Welcome To Litter Berry</p>  */}
              </div>
              
              <div className="bg-rose-300  rounded-lg w-[30%] ml-48 mt-19">
              <p className="text-xl mb-6 text-white italic">Account Loggin</p>
                  <form onSubmit={handleSubmit}>
                  
                      <input className="m-4 rounded-lg" type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/><br />
                      <input className="m-4 rounded-lg" type="text" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/><br />
                      {error && <p>{error}</p>}
                      <input type="submit" className="m-4 rounded-full bg-white px-6  " value="Sign Up"/><br />

                      <p>Don't have a Account?</p>
                     <Link to="/"> <button className="m-4 rounded-full bg-white px-6  ">Login</button></Link><br />
                  </form>
              </div>
           </div>
          </div>
          </>
        );
      }