
import "./EditData.css"
import {useState,useEffect} from "react"
import React from 'react'
import { Spinner } from '@chakra-ui/react'

import {Link as RouterLink, useParams} from "react-router-dom"
import axios from "axios"
import Alert from "../Alert"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Box,
    Container,Text
  } from '@chakra-ui/react'

const EditData = () => {
  const [alert,setAlert]=useState(null)

  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  
    const [data,setData]=useState({
        category:"",
        image:"",
        title:"",
        reviews:"",
        price:+Number(),
        discount:"",
        avability:"",
        sales:""
     })

      const {id}=useParams();
      console.log(id)
      useEffect(()=>{
           loadUser()
      },[])
      
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

  const loadUser=async()=>{
    const result =await axios.get(`http://localhost:4000/api/products/${id}`)
    setData(result.data)
  }

     const {category,image,title,review,price,discount,avability,sales}=data;

     const onInputChange= e =>{
       setData({...data,[e.target.name]:e.target.value})
     }

    const onSubmit=async e=>{
     e.preventDefault();
           await axios.put(`http://localhost:4000/api/products/${id}`,data);
    }

    const Delete= ()=>{
      axios.delete(`http://localhost:4000/api/products/${id}`)
     loadUser();
   
      showAlert("SuccessFully Deleted","success")
     
     
   
    }

    
 


  return (

    <>

    {
         loading?( <Spinner m="auto" justifyContent="center" mt="20%"/>):(<div className="product">
         <div className="productGlass">
     
     
     <Container>
     <Alert alert={alert}/>
         <Box>
         <Text fontSize="20px">Edit Products From Here</Text>
        {/* <RouterLink to="/EditData"><Button alignItems="center" mt="10px">Move to Edit Product</Button></RouterLink></Box> */}
        </Box>
         <form onSubmit={e=>onSubmit(e)}  >
           <label style={{fontFamily:"fantasy"}}>Title</label>
        <input  placeholder="Title" name="title" type="text" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"8px"}} value={title}/>
        <label  style={{fontFamily:"fantasy"}}>Image Url</label>
        <input type="url" id="image" name="image" placeholder="Image Url" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"-3px"}} value={image}/>
        <label  style={{fontFamily:"fantasy"}}>Price</label>
        <input  type="number" name="price" placeholder="Price" onChange={e=>onInputChange(e)}  style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"-2px"}} value={price} />
        <label  style={{fontFamily:"fantasy"}}>Discount</label>
        <input  type="number" name="discount" placeholder="Discount Price" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"0px"}} value={discount}/>
        <label  style={{fontFamily:"fantasy"}}>Avalability </label>
        <input type="text" name="avability" placeholder="Avalability" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"-2px"}} value={avability}/>
        <label  style={{fontFamily:"fantasy"}}>Sales</label>
        <input  type="text" name="sales" placeholder="Lowest/Highest Price " onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"-3px"}} value={sales}/>
         <label HTMLfor="Category" style={{fontFamily:"fantasy"}}>Category</label>
     <select name="category" id="Category" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"3px"}}>
     <option value="categories">Categories</option>
       <option value="TV's,HomeAudio and Home Theatre Accessories">TV's,HomeAudio and Home Theatre Accessories</option>
       <option value="Computers and Tablets">Computers and Tablets</option>
       <option value="Computer Accessiories">Computer Accessiories</option>
       <option value="Cell Phones with Plans">Cell Phones with Plans</option>
       <option value="HeadPhones and Portable Speakers">HeadPhones and Portable Speakers</option>
       <option value="Video Games,Consoles,and Accessories">Video Games,Consoles,and Accessories</option>
       <option value="PC Gaming">PC Gaming</option>
       <option value="Major Appliances">Major Appliances</option>
       <option value="Small Kitchen Appliances">Small Kitchen Appliances</option>
       <option value="Vacuumes">Vacuumes</option>
       <option value="Wearable Tech">Wearable Tech</option>
       <option value="Health & Fitness">Health & Fitness</option>
       <option value="Camera & Drones">Camera & Drones</option>
       <option value="Toys">Toys</option>
       <option value="Electric transportation">Electric transportation</option>
       <option value="Home Living">Home Living</option>
       <option value="Baby & Maternity">Baby & Maternity</option>
     </select>
     
             <button style={{background:"rgb(245,206,5)", width:"20%",height:"40px",marginTop:"20px",borderRadius:"7px",fontSize:"20px"}} color="black" >Submit</button>
             <button  style={{background:"red" ,color:"white",marginLeft:"20px", width:"40%",height:"40px",marginTop:"20px",borderRadius:"7px",fontSize:"20px"}} onClick={Delete}>Delete this Product</button>    
        </form>
       
      
     
          </Container>
        
         </div>
     </div>)

    }

</>
  )
}


export default EditData
