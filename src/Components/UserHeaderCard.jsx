import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import { useNavigate } from 'react-router-dom'
const UserHeaderCard = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  const history=useNavigate()
  return (
    <div>
        <div className="contaniner">
            <div className="header-item"><Link to='/'>Shoppy</Link></div>
            
            
            <div className="header-item"><Link to='/user-profile'>Profile</Link></div>
            <div className="header-item" onClick={(e)=>{
              e.preventDefault()
              setUserDetails(null)
              alert('you are loged out successfully')
              history('/')
            }}>Logout</div>
            <div className="header-item"><Link to='/card'>Card</Link></div>
        </div>
    </div>
  )
}

export default UserHeaderCard