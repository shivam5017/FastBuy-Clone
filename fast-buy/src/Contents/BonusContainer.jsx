

import {Text,Grid} from "@chakra-ui/react"
import ProductDetails4 from "../ProductDetails/ProductDetails4"
import React from 'react'
import axios from "axios"
import Navbar from "../Components/Navbar"
import { useState,useEffect,useContext } from "react"
import { NavbarContext } from "../Context/NavbarContext"
const getItems=()=>{

    return axios.get(`http://localhost:4000/api/products`)
    
    }

const BonusContainer = () => {
  
  const {search}=useContext(NavbarContext)
  
   console.log(search)

    const [datas,setDatas]=useState([])
   
    useEffect(()=>{
      getItems()
      .then((res)=>  
      setDatas(res.data))
      .catch((err)=>console.log(err))
  
    },[])
  

  return (
   <>
              <Text fontWeight="bold" fontSize={{base:"20px",lg:"30px"}} mt={{base:"30px",lg:"50px"}}>Bonus Deals of the Day</Text> 
             
              <Grid w="full" h="fit-content" gridGap={4} gridTemplateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr 1fr"}} mt={{base:"20px",lg:"20px"}}>
      
      {
     datas.filter((e)=>{
       if(search==""){
        return e
       }else if(e.title.toLowerCase().includes(search.toLowerCase())){
        return e
       }
     }).map((e)=>(
           <ProductDetails4 key={e.id} obj={e} id={e.id} image={e.image} title={e.title} price={e.price} discount={e.discount} reviews={e.reviews}/>
        
        
        ))
      }    

      
    </Grid>

 </>
  )
}

export default BonusContainer

