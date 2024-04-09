import React from 'react'
import { useRecoilState } from 'recoil';
import loginDetailsAtom from '../Recoil/loginDetailsAtom';
import { useEffect } from 'react';
import { useState } from 'react';
import orderUserAtom from '../Recoil/orderUserAtom'
const UserProfileCard = () => {
    const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
    const [orderItem,setOrderItem]=useRecoilState(orderUserAtom)
    const [userData,setUserData]=useState([])
    
      useEffect(()=>{
        fetch('https://web-production-0533e.up.railway.app/Mizan/get_order', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(userDetails),
    })
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setOrderItem(data?.orders)
      
     
    })
    .catch((error) => {
      // console.log(error);
    });
    
    },[])

    useEffect(()=>{
        fetch('https://web-production-0533e.up.railway.app/Mizan/get_user', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(userDetails),
    })
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setUserData(data?.user[0])
      
     
    })
    .catch((error) => {
      // console.log(error);
    });
    
    },[])
   

      
    
  return (
    <div className="ecommerce-user-profile">
      <div className="profile-header">
        <img
          src="https://placekitten.com/200/200" // Replace with the user's profile picture URL
          alt="Profile"
          className="profile-picture"
        />
        <div className="user-info">
          <h2>{userData?.name}</h2>
          <p>{userData?.email}</p>
          <p>{userData?.phone}</p>
        
        </div>
      </div>

     

      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          {orderItem.map(order => (
            <li key={order.orderId}>
              Order ID: {order.id} | Date: {order.date}
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  )
}

export default UserProfileCard