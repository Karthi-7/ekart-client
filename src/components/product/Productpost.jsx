import React,{useState,useEffect} from 'react'
import axios from "axios"

function Productpost() {
  const [data,setData]=useState({
    name:"",
    description:"",
    categoryId:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>{
      return {
        ...prev,[name]:value
      }
    })

  }

  const datapost={
    name:data.name,description:data.description,categoryId:parseInt(data.categoryId)
  }

  const productSubmit=async()=>{
  console.log(data,"d")
    const response=await (await axios.post(`${process.env.REACT_APP_BASE_URL}/postsubategory`,datapost)).data
    console.log(response)

  }
  return (
    <div className='container w-50 mt-5'>
    <h2 className='text-center mb-3'>Add category</h2>
    <input className='form-control mb-3' type="text" name="name"  placeholder='enter category-name' onChange={handleChange}/>
    <input className='form-control' type="text" name="description" placeholder='enter description' onChange={handleChange}/>
    <input className='form-control' type="text" name="categoryId" placeholder='enter categoryid' onChange={handleChange}/>
    <div className="d-flex justify-content-center">
    <button className='btn btn-success btn-lg mt-5' onClick={productSubmit}>Add</button>
    </div>
  

      
    </div>
  )
}

export default Productpost
