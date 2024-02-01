import React from 'react'
import './index.css'

const Login = () => {
    // let mootp=123;
    // let motp = 456;
     function mobileOtp(m){
       
        alert("value is"+m);
     }
     function mailOtp(n){

        alert("value is"+n);
     } 

  return (
    <div>
       {/* <button className="abc" onClick={()=>{mobileOtp(12)}}>send otp</button> */}
       {/* <button className="abc" onClick={()=>{mailOtp(34)}}>send otp</button> */}
       <div>
       <input  className='abc' type='text' id='email' />
       <input className='abc' type='text' id='pass'/>


       </div>
       

    </div>
    // onClick={()=>{mobileOTP}}
  )
}

export default Login
