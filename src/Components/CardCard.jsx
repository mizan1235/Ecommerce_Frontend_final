import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import loginDetailsAtom from '../Recoil/loginDetailsAtom';
import { Link } from 'react-router-dom';

const CardCard = () => {
  const [userDetails, setUserDetails] = useRecoilState(loginDetailsAtom);
  const [cardData, setCardData] = useState([]);
  const [cardProducts, setCardProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommercebackendfinal-production.up.railway.app/Mizan/get_card', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        setCardData(data?.cards);
        if(data?.cards.length===0){
         var card_data=document.getElementsByClassName('card-data')[0]
         console.log(card_data)
         card_data.innerHTML="<h1 class='empty-card'>Your Card is Empty</h1>"

        }
      })
      .catch((error) => {
        // Handle error
      });
  }, [userDetails]);

  useEffect(() => {
    const fetchCardProducts = async () => {
      const products = await Promise.all(
        cardData?.map((data) => {
          return fetch('https://ecommercebackendfinal-production.up.railway.app/Mizan/get_card_product', {
            method: "POST",
            headers: {
              'Content-Type': "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((Product) => Product?.product[0])
            .catch((error) => {
              // Handle error
            });
        })
      );

      setCardProducts(products);
    };

    if (cardData.length > 0) {
      fetchCardProducts();
    }
  }, [cardData]);

  return (
    <div className='card-data'>
      {cardProducts.map((product, index) => (
        <div key={index}>
          <div className="detail-product">
            <div className="detail-element">
              <div className="detailed-image">
                <img src={'https://ecommercebackendfinal-production.up.railway.app/media/' + product?.image} alt='Error' />
              </div>
              <div className="detailed-card">
                <div className="buy"><Link to='/buy-now'>Buy Now</Link></div>
                <div className="buy"
                 onClick={(e) => {
                  // e.preventDefault()
                  console.log(product?.id)
                  // alert('hi')
                  const item={
                    product_id:product?.id
                  }
                  fetch('https://ecommercebackendfinal-production.up.railway.app/Mizan/remove_card', {
                    method: "DELETE",
                    headers: {
                      'Content-Type': "application/json",
                    },
                    body: JSON.stringify(item),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data)
                    })
                    .catch((error) => {
                      // Handle error
                    });
                }}>

                  Remove From Card
                </div>
              </div>
            </div>
            <div className="detail-element">
              <div className="detail-desc">
                <h3>{product?.title}</h3>
              </div>
              <div className="detail-desc">
                <h2>&#8377;{product?.price}</h2>
              </div>
              <div className="detail-desc">
                {product?.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCard;
