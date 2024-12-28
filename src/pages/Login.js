
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Example() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    }
    try {
      const response = await axios.post('http://localhost:3002/user/login', body,
        { headers: { "Content-Type": "application/json" } }
      )
      if (response.status = 200) {
        toast.success(response.data.message)
        localStorage.setItem('token', response.data.token)
        setTimeout(()=>{
          navigate('/');
  
          }, 2000)
      }
    }
    catch (err) {
      toast.error(err.response.data.message)

    }

  }
  return (
 
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/login.png')`,
        }}
      >
       <div className="w-full max-w-xs m-auto mt-20 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-opacity-90 rounded-3xl shadow-lg p-6">
  <form className="bg-white bg-opacity-90 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
  <ToastContainer />
</div>
</div>
     
    );
    

}
