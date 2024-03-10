import React from 'react'
// import HeaderCard from '../Components/HeaderCard'
import OrderPlacedSuccessCard from '../Components/OrderPlacedSuccessCard'
import Footer from '../Components/Footer'
import UserHeaderCard from '../Components/UserHeaderCard'

const OrderPlacedSuccess = () => {
  return (
    <div>
        <UserHeaderCard/>
        <OrderPlacedSuccessCard/>
        <Footer/>
    </div>
  )
}

export default OrderPlacedSuccess