import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import DetailCard from '../Components/DetailCard'
import Footer from '../Components/Footer'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import UserHeaderCard from '../Components/UserHeaderCard'
import { useRecoilState } from 'recoil'
const Detailed = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  return (
    <div>
         {userDetails===null?<HeaderCard/>:<UserHeaderCard/>}
        <DetailCard/>
        <Footer/>
    </div>
  )
}

export default Detailed