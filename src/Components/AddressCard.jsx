import React from 'react'
import { useRecoilState } from 'recoil'
import { useRef } from 'react'

import addressCardAtom from '../Recoil/addressCardAtom'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
const AddressCard = () => {
    const [address,setAddress]=useRecoilState(addressCardAtom)
    const [userDetails,setUserDetails]=useRecoilState(loginDetailsAtom)

    const nameRef=useRef(null);
    const mobileRef=useRef(null);
    const pinRef=useRef(null);
    const addressRef=useRef(null);
    const flat_noRef=useRef(null);
    const stateRef=useRef(null);

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear(); 
    const day = date.getDay();
    const d=day + "/" + (month + 1) + "/" + year

    const onSubmit=(e)=>{
        e.preventDefault();
        const data={
            name:nameRef.current.value,
            mobile:mobileRef.current.value,
            email:userDetails?.email,
            pin:pinRef.current.value,
            address:addressRef.current.value,
            flat_no:flat_noRef.current.value,
            state:stateRef.current.value,
            date:d
        }
        console.log(data)
        setAddress(data)
        // console.log(address)
    }

  return (
    <div>
        <div className="add-container">
             <h3 style={{'textAlign':'center'}}>Address</h3>
            <form action="" onSubmit={onSubmit}>
            <div className="item">
                <div className="add-element">Full name</div>
                
                    <input type="text"  className='add-element' ref={nameRef}/>
                
            </div>
            <div className="item">
                <div className="add-element" >Mobile number</div>
                
                    <input type="number"  className='add-element' required ref={mobileRef}/>
                
            </div>
            <div className="item">
                <div className="add-element">Pin code</div>
                
                    <input type="number"  className='add-element' required ref={pinRef}/>
                
            </div>
            <div className="item">
                <div className="add-element" required>Address</div>
                
                    <input type="textarea"  className='add-element' ref={addressRef}/>
                
            </div>
            <div className="item">
                <div className="add-element">Flat,house no,building</div>
                
                    <input type="text"  className='add-element' ref={flat_noRef}/>
                
            </div>
            <div className="item">
                <div className="add-element">State</div>
                
                    <input type="text"  className='add-element' ref={stateRef}/>
                
            </div>
            <div className="item">
                <button type='submit' className='add-btn'> Use this address</button>
                
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default AddressCard