import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PostToken from '../newone';
import logo from '../assets/logo.png';
import Navbar from './sidebar';
import Event from '../event2';

function PostTokenUser() {
    const [da, setDa] = useState('');
  
    useEffect(() => {
      const token = localStorage.getItem('access_token');
      const data = { token: token };
  
      axios
        .post('http://127.0.0.1:8000/api/check-authenticated/', data)
        .then((response) => {
          const serializedData = response.data;
          const userObject = JSON.parse(serializedData)[0];
          setDa(userObject);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <>
        {da === 'Login' ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4">{da && da.fields && da.fields.username}</h1>
            <p>Email: {da && da.fields && da.fields.email}</p>
            <p>Role: Student of Fiscal Institute</p>
            {/* Add more profile information as needed */}
          </div>
        )}
      </>
    );
  }

  function ProfilePage() {
    return (
        <div>
          <Navbar />
    
          <div className="flex flex-row h-screen">
            <div className="flex-grow bg-gray-200 p-6 hidden sm:block">
              {/* Add content for the left side */}
              <PostToken />
            </div>
            <div className="block bg-gray-100 w-full sm:w-1/4  items-center text-center">
              {/* Add additional content for the right side */}
              
              <PostTokenUser />
              
              <div className='block sm:hidden'>
                <PostToken/>
              </div>
              <div className="hidden sm:block">
  <Event />
</div>

              
            </div>
          </div>
        </div>
      );
}

export default ProfilePage;
