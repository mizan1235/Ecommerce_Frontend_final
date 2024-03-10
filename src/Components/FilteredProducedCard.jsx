import React from 'react'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import allProductAtom from '../Recoil/allProductAtom'
import FilteredProductAtom from '../Recoil/FilteredProductAtom'
import searchInputAtom from '../Recoil/searchInputAtom'
import detailedProductAtom from '../Recoil/detailedProductAtom'
import { useNavigate } from 'react-router-dom'
const FilteredProducedCard = () => {
    const [allProducts,setAllProducts]=useRecoilState(allProductAtom)
   const [filteredType,setFilteredType]=useRecoilState(FilteredProductAtom)

   const[searchInput,setSearchInput]=useRecoilState(searchInputAtom)
   const [detailedProduct,setDetailedProduct]=useRecoilState(detailedProductAtom)

   const history=useNavigate()
   const Data={
    category:filteredType
   }

    useEffect(()=>{
        fetch('https://ecommercebackendfinal-production.up.railway.app/Mizan/get_product_category',
    {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(Data),
    }
    ).then((Response)=>Response.json())
    .then((data)=>{
      
      console.log(data)
       setAllProducts(data?.products)
       
    }).catch((error)=>{
      console.log(error)
    })
    
    },[])
  return (
    <div>
         <div className='container'>
 
 <div className='product-wrapper'>
 {allProducts
    ?.filter((val)=>{
   
      if(searchInput===""){return val}
      else if(val?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())){return val}
     // else  return val;
   })
?.map((data,index)=>{
   return(
     <div  className='product-cart' onClick={(e)=>{
      e.preventDefault()
      setDetailedProduct(data)
      history('/detailed_product')
    }}>
       {/* {data?.id} */}
       {/* {data?.title} */}
    
    <div className='item-details'>
    
     {/* {<img className='image' src = {data?.} alt={data?.company_name}/>} */}
     {<img className='image' src = {'https://ecommercebackendfinal-production.up.railway.app/media/'+data?.image} alt='Error'/>}
    
    </div>
     <div className="item-details">
             <h5 className='item'>{data?.title}</h5>
    
             <h3 className='item'>&#8377;{data?.price}</h3>
     </div>
     </div>
   )
 })}
</div>
</div>
    </div>
  )
}

export default FilteredProducedCard