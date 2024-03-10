import React from 'react'
// import HeaderCard from '../Components/HeaderCard'
import AddressCard from '../Components/AddressCard'
import PaymentCard from '../Components/PaymentCard'
import Footer from '../Components/Footer'
import UserHeaderCard from '../Components/UserHeaderCard'

const BuyNow = () => {
  return (
    <div>
        <UserHeaderCard/>
        <AddressCard/>
        <PaymentCard/>
        <Footer/>
    </div>
  )
}

export default BuyNow