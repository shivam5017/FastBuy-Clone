
import "./Productedit.css"
import {useState,useEffect} from "react"
import React from 'react'
import { Spinner } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import axios from "axios"
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
  import Alert from "./Alert"
const ProductEdit = () => {
  const [alert,setAlert]=useState(null)
    const [data,setData]=useState({
        category:"",
        image:"",
        title:"",
        review:"",
        price:+Number(),
        discount:"",
        avability:"",
        sales:""
     })
     const [loading,setLoading]=useState(false)

     useEffect(() => {
       setLoading(true);
       setTimeout(() => {
         setLoading(false);
       }, 1000);
     }, []);
     

     const {category,image,title,review,price,discount,avability,sales}=data;

     const onInputChange= e =>{
       setData({...data,[e.target.name]:e.target.value})
     }

    const onSubmit=async e=>{
     e.preventDefault();
           await axios.post("http://localhost:4000/api/products",data);
           showAlert("SuccessFully Added","success")
     
    }
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
  
    }




  return (
<>
{
loading?(  <Spinner m="auto" justifyContent="center" mt="20%"/>):(
<div className="product">
    <div className="productGlass">
    <Alert alert={alert}/>
<Container>
    <Box>
    <Text fontSize="20px">Add Products From Here</Text>
   <RouterLink to="/ProductSelect"><Button alignItems="center" mt="10px">Move to Edit Product</Button></RouterLink></Box>

    <form onSubmit={e=>onSubmit(e)}  >
   <input  placeholder="Title" name="title" type="text" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"20px"}}/>
   <input type="url" id="image" name="image" placeholder="Image Url" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
   <input type="text" name="review" placeholder="Reviews" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
   <input  type="number" name="price" placeholder="Price" onChange={e=>onInputChange(e)}  style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
   <input  type="number" name="discount" placeholder="Discount Price" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
   <input type="text" name="avability" placeholder="Avalability" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
   <input  type="text" name="sales" placeholder="Lowest/Highest Price " onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}/>
    <label for="Category" >Category</label>
<select name="category" id="Category" onChange={e=>onInputChange(e)} style={{width:"100%",height:"40px",borderRadius:"5px",marginTop:"10px"}}>
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
   </form>

     </Container>
  
    </div>
</div>
)
}    

</>
  )
}

export default ProductEdit
