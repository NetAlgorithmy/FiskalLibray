import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png'

const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/signup/', formData)
      .then((response) => {
        localStorage.setItem('access_token', response.data.token);
        console.log(response.data.token);
        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.username){
            if (error.response.data.email){
                if (error.response.data.password){
                    var uf = error.response.data.email+'\n'+error.response.data.username+"\n"+error.response.data.password
                }
                else {
                    var uf = error.response.data.email+'\n'+error.response.data.username
                }

            }
            else {
                var uf = error.response.data.username
            }
        }
        else if (error.response.data.email){
            if (error.response.data.password){
                var uf = error.response.data.email+"\n"+error.response.data.password
            }
            else {
                var uf = error.response.data.email
            }
        }
        else {
            var uf = error.response.data.password
        }
        document.getElementById('error').innerText=uf;
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="w-full max-w-md ">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 flex flex-col items-center">
          <img src={logo} width="300px" alt="logo" />
          <form onSubmit={handleSubmit} className="w-full mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                name="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Email:
              </label>
              <input
                className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signin">
                Sign in
              </a>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign up
              </button>
            </div>
            <p className="text-red-500 text-xs italic mt-4" id="error"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
