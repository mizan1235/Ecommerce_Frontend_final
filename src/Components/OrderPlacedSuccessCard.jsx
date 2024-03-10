import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import detailedProductAtom from '../Recoil/detailedProductAtom'
import orderSummeryAtom from '../Recoil/orderSummeryAtom'
const OrderPlacedSuccessCard = () => {
    const [detailedProduct, setDetailedProduct] = useRecoilState(detailedProductAtom)
    const [ordeSummeryData,setOrderSummeryData]=useRecoilState(orderSummeryAtom)
    console.log(ordeSummeryData)
  return (
    <div className="order-placed-success">
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for shopping with us. Your order has been successfully placed.</p>
      
      <div className="order-details">
        <h3>Order Details</h3>
        {/* Display relevant order details such as order number, items, total amount, etc. */}
        {/* Replace the placeholders with actual data from your application */}
        <p>Order Id: <span>{ordeSummeryData?.id}</span></p>
        <p>Total Amount: <span>&#8377;{detailedProduct?.price}</span></p>
        {/* Add more details as needed */}
      </div>

      <div className="continue-shopping">
        <p>Continue shopping for more amazing products.</p>
        <Link to="/">Shop Now</Link>
      </div>

      <div className="social-share">
        <p>Share your purchase with friends</p>
        {/* Add social media sharing buttons/icons */}
        {/* You can use third-party libraries for social media sharing functionality */}
      </div>
    </div>
  )
}

export default OrderPlacedSuccessCard