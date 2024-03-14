import React from 'react'
import background from "../assets/img/bg.svg";

function Login() {
  return (
    <div className='login'>
      <div>
        <form action="#">
          <sign-in>Sign-In</sign-in>
        <irent>iRent</irent>
        <email>Email</email>
        
          <input type="text" placeholder="Username" />
          <password>Password</password>
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login
// import background from "../assets/img/bg.svg"

// function Login() {
//   return (
//     <div
//     className='login '>

//       <div>
//         <form action="#"></form>
//       </div>

//     </div>
         
//   )
// }

// export default Login