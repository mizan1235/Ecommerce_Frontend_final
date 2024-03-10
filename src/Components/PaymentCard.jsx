import React from 'react'
import { Link } from 'react-router-dom'
const PaymentCard = () => {
  return (
    <div>
        <div className="add-container">
             <h3 style={{'textAlign':'center'}}>Payment</h3>
            <div className="item">
                <div className="add-element" style={{'fontWeight':'bold'}}>
                    <input type="radio"  />Cash on Delivery
                </div>
                
                    
                
            </div>
            
            
            
            <div className="item">
                <button type='submit' className='add-btn' > <Link to='/order-summery'>Order Now</Link></button>
                
            </div>
            
        </div>
    </div>
  )
}

export default PaymentCard