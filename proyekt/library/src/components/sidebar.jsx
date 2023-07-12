import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

function PostToken() {
  const [da, setDa] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const data = { token: token };

    axios.post('http://127.0.0.1:8000/api/check-authenticated/', data)
      .then((response) => {
        const serializedData = response.data;
        if(response.data!=='Login'){
        const userObject = JSON.parse(serializedData)[0];
        setDa(userObject);
        console.log(userObject.fields.username);}
        else {
          setDa(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {da === "Login" ? (
        <NavLink to="/signin" className='text-blue-600 hover:text-gray-900'>Signin</NavLink>
      ) : (
        <h2 className='text-blue-600'>{da && da.fields && da.fields.username}</h2>
      )}
    </>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-32">
        
          <div className="flex items-center ">
          <NavLink to="/" className="flex-shrink-0 flex items-center">
              <img className="h-10 w-10 sm:h-20 sm:w-20 " src={logo} alt="Library Logo" />
            </NavLink>
            <div className="flex justify-center items-center text-center pl-6 sm:pl-12 mx-auto">
            <NavLink
              
                to="/books"
                className="text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm sm:text-lg font-medium "
                activeclassname="text-gray-600"
              >
                history of library
              </NavLink>
              <NavLink
              
                to="/books"
                className=" pl-6 sm:pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm sm:text-lg font-medium "
                activeclassname="text-gray-600"
              >
                Candidates of Library
              </NavLink>
              <NavLink
              
                to="/profile"
                className=" sm:hidden pl-6 sm:pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm sm:text-lg font-medium "
                activeclassname="text-gray-600"
              >
                <div className='pl-8'>
                <FaUser/>
                </div>
                <span className='items-begin'><PostToken/></span>
              </NavLink>

              </div>

            <div className="hidden  sm:flex pl-12  items-center">
              <NavLink
              
                to="/books"
                className="text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium "
                activeclassname="text-gray-600"
              >
                Books
              </NavLink>
              <NavLink
                to="/audio"
                className="pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium items-center"
                activeclassname="text-gray-600"
              >
                Audio
              </NavLink>
              
              <NavLink
                to="/work"
                className="pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium items-center"
                activeclassname="text-gray-600"
              >
                Work
              </NavLink>
              <NavLink
                to="/article"
                className="pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium items-center"
                activeclassname="text-gray-600"
              >
                Article
              </NavLink>
              <NavLink
                to="/contact"
                className="pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium items-center"
                activeclassname="text-gray-600"
              >
                Contact
              </NavLink>
              <NavLink
                to="/discover"
                className="pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium items-center"
                activeclassname="text-gray-600"
              >
                Discover
              </NavLink>
              <NavLink
              
                to="/profile"
                className="  pl-6 sm:pl-12 text-blue-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm sm:text-lg font-medium "
                activeclassname="text-gray-600"
              >
                <div className='pl-8'>
                <FaUser/>
                </div>
                
              </NavLink>
              <PostToken/>
              
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
          </div>
        </div>
      </div>
      <div className="sm:hidden" >
        <div className="px-2 pt-2 pb-3 space-y-1 pl-4">
        <NavLink
                to="/books"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium "
                activeclassname="text-gray-600"
              >
                Books
              </NavLink>
              <NavLink
                to="/audio"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium items-center"
                activeclassname="text-gray-600"
              >
                Audio
              </NavLink>
              
              <NavLink
                to="/work"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium items-center"
                activeclassname="text-gray-600"
              >
                Work
              </NavLink>
              <NavLink
                to="/article"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium items-center"
                activeclassname="text-gray-600"
              >
                Article
              </NavLink>
              <NavLink
                to="/contact"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium items-center"
                activeclassname="text-gray-600"
              >
                Contact
              </NavLink>
              <NavLink
                to="/discover"
                className="text-blue-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium items-center"
                activeclassname="text-gray-600"
              >
                Discover
              </NavLink>
        </div>
      </div>
    </nav>
  );}

export default Navbar;
