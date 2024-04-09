import React from 'react'
import { useRecoilState } from 'recoil'
import detailedProductAtom from '../Recoil/detailedProductAtom'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const DetailCard = () => {
    const [detailedProduct, setDetailedProduct] = useRecoilState(detailedProductAtom)
    const [userDetails, setUserDetails] = useRecoilState(loginDetailsAtom)

    const history=useNavigate()
    console.log(detailedProduct)
    return (
        <div>
            <div className="detail-product">
                <div className="detail-element">
                    <div className="detailed-image">
                        <img src={'https://web-production-0533e.up.railway.app/media/' + detailedProduct?.image} alt='Error' />
                    </div>
                    <div className="detailed-card">
                        <div className="buy" 
                        ><Link to='/buy-now'>Buy Now</Link></div>
                        <div className="buy"
                        onClick={(e) => {
                            if(userDetails===null){
                                history('/login')
                            }
                            e.preventDefault()
                            const data = {
                                email: userDetails?.email,
                                product_id: detailedProduct?.id
                            }
                            console.log(data)
                            fetch('https://web-production-0533e.up.railway.app/Mizan/create_card', {
                                method: "POST",
                                headers: {
                                    'Content-Type': "application/json",
                                },
                                body: JSON.stringify(data),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    console.log(data);
                                    alert(data?.message)
                                    if(data?.message==='Added to the Card successfully'){
                                        alert(data?.message)
                                        history('/card')
                                    }
                                    
                                })
                                .catch((error) => {
                                    // console.log(error);
                                });

                        }}>Add To Card</div>
                    </div>
                </div>
                <div className="detail-element">
                    <div className="detail-desc">
                        <h3>{detailedProduct?.title}</h3>
                    </div>
                    <div className="detail-desc">
                        <h2>&#8377;{detailedProduct?.price}</h2>
                    </div>
                    <div className="detail-desc">
                        {detailedProduct?.desc}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailCard