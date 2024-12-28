// import React , {useState} from 'react'
// import {signInWithPopup} from 'firebase/auth';
// // import {signOut} from 'firebase/auth';
// // import {loginWithGoogle} from './config/firebase';
// // import {auth} from './config/firebase';
// // import {useAuthState} from 'react-firebase-hooks/auth'
// function Login() {
//   const [user , loading ] = useAuthState(auth)
//   const [isLoggedIn , setIsLoggedIn ]= useState(false)
//   async function handleLogin(){
//     await signInWithPopup(auth,  loginWithGoogle)
//     setIsLoggedIn(true)
//   }
//   async function handleLogout(){
//     await signOut(auth)
//     setIsLoggedIn(false)
//   }
//     return (
//     <>
//    <input placeholder='Email'/>
//    <input placeholder='Password'/>
//    <br/>
//    <button>submit</button>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     {
//       user &&   isLoggedIn  ? (
//           <>
//           <img src={user.photoURL} alt='picHere'></img> 
//            <h1>Congratulations,You are logged in 
//             { user.displayName}
//             </h1>  <button onClick={handleLogout}>Logout</button>
//           </>
// )
// :<button onClick={handleLogin } >Login with google</button>
//       }
//       {
//         loading && (
//           <p>loading...</p>
//         )
//       }


//       </>
//       )
// }
// export default Login

