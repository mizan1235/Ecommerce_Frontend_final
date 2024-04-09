import React from 'react'
import { useRecoilState } from 'recoil'
import addressCardAtom from '../Recoil/addressCardAtom'
import detailedProductAtom from '../Recoil/detailedProductAtom'
import { useNavigate } from 'react-router-dom'
import orderSummeryAtom from '../Recoil/orderSummeryAtom'

const OrderSummeryCard = () => {
    const [address,setAddress]=useRecoilState(addressCardAtom)
    const [detailedProduct, setDetailedProduct] = useRecoilState(detailedProductAtom)
    const [ordeSummeryData,setOrderSummeryData]=useRecoilState(orderSummeryAtom)
    const history=useNavigate()

    console.log(address)
    console.log(detailedProduct)
    const confirmOrder=(e)=>{
        e.preventDefault();

        fetch('https://web-production-0533e.up.railway.app/Mizan/create_order', {
            method: "POST",
            headers: {
              'Content-Type': "application/json",
            },
            body: JSON.stringify(address),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setOrderSummeryData(data?.order)
            history('/order-placed-success')

          })
          .catch((error) => {
            // console.log(error);
          });

    }
  return (
    <div>
        <div className="summery-container">
            <div className="summery-item">
                <div className="summery-element">
                    <img src={'https://web-production-0533e.up.railway.app/media/'+detailedProduct?.image} alt="Error" />
                </div>
                <div className="summery-element"><h3>{detailedProduct?.title}</h3></div>
                <div className="summery-element"> <h3>&#8377;{detailedProduct?.price}</h3></div>
            </div>
            <div className="summery-item">
               <div className='address-address'>
               <span style={{'fontWeight':'bold'}}> Address</span> &nbsp;&nbsp;:&nbsp;&nbsp;
               {address?.name},{address?.mobile},{address?.address},
               {address?.flat_no},{address?.state},{address?.pin}
               </div>
            </div>
            <div className="btn" onClick={confirmOrder}>Confirm</div>
        </div>
    </div>
  )
}

export default OrderSummeryCard