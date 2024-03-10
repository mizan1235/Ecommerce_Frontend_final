import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import Footer from '../Components/Footer'
import HomeCard from '../Components/HomeCard'
import { useRecoilState } from 'recoil'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import UserHeaderCard from '../Components/UserHeaderCard'
const Home = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  return (
    <div>
        {userDetails===null?<HeaderCard/>:<UserHeaderCard/>}
        <HomeCard/>
        <Footer/>
    </div>
  )
}

export default Home