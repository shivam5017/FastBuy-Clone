

import ProductDetails6 from "../../ProductDetails/ProductDetails6"
import "./ProductSelect.css"
import {Text,Grid} from "@chakra-ui/react"
import React from 'react'
import { useState,useEffect,useContext } from "react"
import axios from "axios"


const getItems=()=>{

    return axios.get(`http://localhost:4000/api/products`)
    
    }

const ProductSelect = () => {

      

    const [datas,setDatas]=useState([])
   
    useEffect(()=>{
      getItems()
      .then((res)=>  
      setDatas(res.data))
      .catch((err)=>console.log(err))
  
    },[])
  
 
 
    return (
    
        <div className="productSelect">
    <div className="productSelectGlass">
              <Text fontWeight="bold" fontSize={{base:"20px",lg:"30px"}} mt={{base:"30px",lg:"50px"}}>Choose Data for edit or Delete</Text> 
             
              <Grid w="full" h="fit-content" gridGap={4} gridTemplateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr 1fr"}} mt={{base:"20px",lg:"20px"}}>
      
      {
     datas.map((e)=>(
           <ProductDetails6 key={e.id} obj={e} id={e.id} image={e.image} title={e.title} price={e.price} discount={e.discount} reviews={e.reviews}/>
        
        
        ))
      }    
  
      
    </Grid>

 </div>
 </div>
   



)
}

export default ProductSelect
