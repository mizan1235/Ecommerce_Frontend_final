import React from 'react'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import allProductAtom from '../Recoil/allProductAtom'
import FilteredProductAtom from '../Recoil/FilteredProductAtom'
import { useNavigate } from 'react-router-dom'
import searchInputAtom from '../Recoil/searchInputAtom'
import detailedProductAtom from '../Recoil/detailedProductAtom'
const HomeCard = () => {
   const [allProducts,setAllProducts]=useRecoilState(allProductAtom)
   const [filteredType,setFilteredType]=useRecoilState(FilteredProductAtom)
   const [detailedProduct,setDetailedProduct]=useRecoilState(detailedProductAtom)

   const[searchInput,setSearchInput]=useRecoilState(searchInputAtom)
   const history=useNavigate()
   useEffect(()=>{
    fetch('https://web-production-0533e.up.railway.app/Mizan/get_all_products', {
      method: "GET",
              headers: {
                'Content-Type': "application/json",
              }
              
    })
    .then((response) => response.json())
    .then((data) => {
      
      console.log(data?.products)
      setAllProducts(data?.products)
    //   console.log(data); 
      
    })
    .catch((error) => {
      console.log(error);
    });

},[])
  return (
    <div>
        <div className="item-container">
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Grocery')
              history('/filtered-product')
            }} >
                <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/images/grocery.webp" alt="E" />
                </div>
                <div className="item-element" >Grocery</div>

            </div >
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Mobile')
              history('/filtered-product')
            }}>
                <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/mobile.webp" alt="" />
                </div>
                <div className="item-element">Mobile</div>
            </div>
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Fashion')
              history('/filtered-product')
            }}>
            <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/fashion.webp" alt="" />
                </div>
                <div className="item-element">Fashion</div>
            </div>
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Electronics')
              history('/filtered-product')
            }}>
            <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/electronics.webp" alt="" />
                </div>
                <div className="item-element">Electronics</div>
            </div>
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Home_Furniture')
              history('/filtered-product')
            }}><div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/furniture.webp" alt="" />
                </div>
                <div className="item-element">Home & Furniture</div></div>
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Beauty,Toys')
              history('/filtered-product')
            }}>
            <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/beauty,toys.webp" alt="" />
                </div>
                <div className="item-element">Beauty,Toys & More</div>
            </div>
            <div className="item-type" onClick={(e)=>{
              setFilteredType('Jewellery')
              history('/filtered-product')
            }}>
            <div className="item-element">
                    <img src="../../Ecommerce_Frontend_final/Images/jewellery.webp" alt="" />
                </div>
                <div className="item-element">Jewellery</div>
            </div>
            
        </div>


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
            {<img className='image' src = {'https://web-production-0533e.up.railway.app/media/'+data?.image} alt='Error'/>}
           
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

export default HomeCard
