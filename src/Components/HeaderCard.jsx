import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import searchInputAtom from '../Recoil/searchInputAtom'
const HeaderCard = () => {
  const[searchInput,setSearchInput]=useRecoilState(searchInputAtom)
  return (
    <div>
        <div className="contaniner">
            <div className="header-item"><Link to='/'>Shoppy</Link></div>
            <div className="header-item">
                <form action="">
                    <input type="text" placeholder='Search For Product' className='header-input' onChange={(e)=>{
                      e.preventDefault()
                      console.log(e.target.value)
                      setSearchInput(e.target.value)
                    }}/>
                </form>
            </div>
            <div className="header-item"><Link to='/login'>Login</Link></div>
            <div className="header-item"><Link to='/register'>Register</Link></div>
            <div className="header-item"><Link to='/card'>Card</Link></div>
        </div>
    </div>
  )
}

export default HeaderCard