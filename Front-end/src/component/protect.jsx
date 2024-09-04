import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Nav from './nav';

const Protect = () => {
  const [logged, setLogged] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('token');




    if (token) {
      setLogged(true);

      

      // localStorage.removeItem('token'); // Remove the token after checking
    } else {
      setLogged(false);
    }
  }, []);

  if (logged === null) {


    return <><div>Loading......</div>
   
  
    </>
  }

  return logged ?<Outlet />   : <Navigate to="/login" />;
};

export default Protect;
