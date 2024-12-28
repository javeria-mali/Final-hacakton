// mara wla 
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       // Making an API call to register the user
//       // const response = await axios.post("http://localhost:3005/api/auth/register", {
//       //   name,
//       //   email,
//       //   password,
//       // });
//       const response = await axios.post('http://localhost:3005/users', {
//         name,
//       email,
//        password,
//     });

//       if (response.status === 201) {
//         // If registration is successful, redirect to Login page
//         alert(response.data.message); // Optionally, you can show a success message
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert("Error during registration");
//     }
//   };
// ................
// mam wla 
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// function UserRegister() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [id, setId] = useState('')
//   const [age, setAge] = useState('')
//   const [userSave, setUserSave] = useState([])
//   const [edit, setEdit] = useState(false)

//   const getData = async () => {
//     const token = localStorage.getItem('token')
//     try {
//       const userData = await axios.get("http://localhost:3001/user" , 
//         {
//           headers: {
//             'token': token
//           }
//         }
//       )
//       setUserSave(userData?.data?.user)
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   useEffect(() => {

//     getData()

//   }, [])
//   // mam wla 
//   const handleSubmit = async () => {
//     console.log("Function is working")
//     const body = {
//       name: name,
//       email: email,
//       password: password,
//       age: age
//     }
//     try {
//       const userData = await axios.post("http://localhost:3001/user", body)
//       if (userData) {
//         alert(userData.data.message)
//         // getData()
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
  // }
  // .................
  


//   const handleDelete = async (id) => {
//     console.log(id)
//     try {
//       const deleteUser = await axios.delete(`http://localhost:3001/user/${id}`)
//       if (deleteUser) {
//         alert(deleteUser.data.message)
//         getData()
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
//   const handleModel = (data) => {
//     setEdit(true)
//     setName(data.name)
//     setEmail(data.email)
//     setPassword(data.password)
//     setAge(data.age)
//     setId(data._id)
//   }
//   const handleUpdate = async (id) => {
//     console.log(id)
//     const body = {
//       name: name,
//       email: email,
//       password: password,
//       age: age
//     }
//     try {
//       const updateUser = await axios.patch(`http://localhost:3001/user/${id}`, body)
//       if (updateUser) {
//         alert(updateUser.data.message)
//         getData()
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   return (
 
// <div 
//   className="flex justify-center items-center h-screen bg-cover bg-center"
//   style={{ backgroundImage: "url('/images/login.png')" }} // Using relative path to the public folder
// >
 
//       <form

//       className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-xl shadow-md w-96"
//       onSubmit={handleSubmit}
//     >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register Form</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full p-2 mb-4 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input 
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-gray-600 transition duration-300"
//         >
//           Register
//         </button>
        {/* ............ */}
        {/* {userSave.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.password}</p>
          <p>{data.age}</p>
          <button onClick={() => handleDelete(data._id)}>Delete</button>
          <button onClick={() => handleModel(data)}>Update</button>
          <button onClick={() => handleUpdate(id)}>Submit</button>
        </div>
      ))} */}
      // </form>
    // </div>
  // );
// };

// export default UserRegister;

