import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import OrderSummeryCard from '../Components/OrderSummeryCard'
import Footer from '../Components/Footer'
import UserHeaderCard from '../Components/UserHeaderCard'

const OrderSummery = () => {
  return (
    <div>
        <UserHeaderCard/>
        <OrderSummeryCard/>
        <Footer/>
    </div>
  )
}

export default OrderSummery