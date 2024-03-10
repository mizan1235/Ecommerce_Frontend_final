import React from 'react'

import { Routes,Route , BrowserRouter as Router} from "react-router-dom";
import '../Components/Home.css'


import Home from './Home'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import FilteredProduct from './FilteredProduct'
import Detailed from './Detailed';
import Card from './Card'
import BuyNow from './BuyNow';
import OrderSummery from './OrderSummery'
import OrderPlacedSuccess from './OrderPlacedSuccess';
import UserHeaderCard from '../Components/UserHeaderCard';
import UserProfile from './UserProfile';
import loginDetailsAtom from '../Recoil/loginDetailsAtom';
import { useRecoilState } from 'recoil';
import NotFound from './NotFound';
const Allpages = () => {
  const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)
  return (
    <div>

       <Router basename='/Ecommerce_Frontend_final'>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/filtered-product" element={<FilteredProduct/>}/>
        <Route path="/detailed_product" element={<Detailed/>}/>
        <Route path="/card" element={userDetails===null?<Login/>:<Card/>}/>
        <Route path="/buy-now" element={userDetails===null?<Login/>:<BuyNow/>}/>
        <Route path="/order-summery" element={<OrderSummery/>}/>
        <Route path="/order-placed-success" element={<OrderPlacedSuccess/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/*" element={<NotFound/>}/>

        
        </Routes>
       </Router>
    </div>
  )
}

export default Allpages