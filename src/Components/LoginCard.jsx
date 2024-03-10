import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import detailedProductAtom from '../Recoil/detailedProductAtom'
const LoginCard = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  const [detailedProduct, setDetailedProduct] = useRecoilState(detailedProductAtom)
  const emailRef=useRef(null)
  const passwordRef=useRef(null)
  const history=useNavigate()

  const onSubmit=(e)=>{
    e.preventDefault()
    
    const userCredetial={
      email:emailRef?.current?.value,
      password:passwordRef?.current?.value
    }
    fetch('https://ecommercebackendfinal-production.up.railway.app/Mizan/login_user',
    {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(userCredetial),
    }
    ).then((Response)=>Response.json())
    .then((data)=>{
      
      console.log(data)
       
      //  history('/user-profile')
      if(data?.status==='successfull loged in'){
        setUserDetails(userCredetial)
        if(detailedProduct===""){
          history('/')
        }
        else{
          history('/detailed_product')
        }
      }
      else alert(data?.status)
     
       
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
         <div className='login-card-container'>
            <form onSubmit={onSubmit}
            >
            
            <input className='login-input' type='email' placeholder='Enter your Email'
            ref={emailRef}
            />
            
            <input className='login-input' type='password' placeholder='password'
            ref={passwordRef}
            />
           
            <button className='login-btn' type='submit'>Log In</button>
            <div className='signUp' ><Link to="/register">Create New Account</Link> </div>
            
            </form>
            

      
        </div>
    </div>
  )
}

export default LoginCard