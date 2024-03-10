import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import FilteredProducedCard from '../Components/FilteredProducedCard'
import Footer from '../Components/Footer'
import UserHeaderCard from '../Components/UserHeaderCard'

import { useRecoilState } from 'recoil'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'

const FilteredProduct = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  return (
    <div>
         {userDetails===null?<HeaderCard/>:<UserHeaderCard/>}
        <FilteredProducedCard/>
        <Footer/>
    </div>
  )
}

export default FilteredProduct