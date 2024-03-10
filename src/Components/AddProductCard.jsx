import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const AddProductCard = () => {
  const [filename, setFilename] = useState('')
    const [files, setFiles] = useState([{}])
    const [title,setTitle]=useState()
    const [price,setPrice]=useState()
    const [seller_email,setEmail]=useState()
    const [category,setCategory]=useState()
    const [desc,setDesc]=useState()
    const [status, setstatus] = useState('')
   
    let api = 'https://ecommercebackendfinal-production.up.railway.app/Mizan/api'
   
    const saveFile = (e) =>{
      e.preventDefault()
      console.log('Button clicked')

      let formData = new FormData();
      formData.append("image", filename)
      formData.append('title',title)
      formData.append('seller_email',seller_email)
      formData.append('price',price)
      formData.append('category',category)
      formData.append('desc',desc)


      console.log(filename)

      let axiosConfig = {
          headers: {
              'Content-Type': 'multpart/form-data'
          }
      }

      console.log(formData)
      axios.post(api + '/files/', formData, axiosConfig).then(
          response =>{
              console.log(response)
              setstatus('File Uploaded Successfully')
          }
      ).catch(error =>{
          console.log(error)
      })
  }

    
  return (
    <div>
        <div className='login-card-container'>
            <form  
            >
              <input type="email" onChange={e => setEmail(e.target.value)} className="login-input" placeholder='Email'/>
              <input type="text" onChange={e => setTitle(e.target.value)} className="login-input" placeholder='Title'/>
              <input type="number" onChange={e => setPrice(e.target.value)} className="login-input" placeholder='Price'/>
              <input type="text" onChange={e => setCategory(e.target.value)} className="login-input" placeholder='Category'/>
              <input type="text" onChange={e => setDesc(e.target.value)} className="login-input" placeholder='desc'/>
              
             Photo
             <input type="file" onChange={e => setFilename(e.target.files[0])} className="login-input" placeholder='image'/>
          
           
            <button className='login-btn' type='submit' onClick={saveFile}>Add</button>
            
            
            </form>
            
        </div>
    </div>
  )
}

export default AddProductCard