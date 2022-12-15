

import {Text,Grid} from "@chakra-ui/react"
import ProductDetails5 from "../ProductDetails/ProductDetails5"
import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react"

const griddata=JSON.parse(localStorage.getItem("item"))||[];

const CategoryContainer = () => {




  return (
   <>
              <Text fontWeight="bold" fontSize={{base:"20px",lg:"30px"}} mt={{base:"30px",lg:"50px"}}>Category</Text> 
             
              <Grid w="full" h="fit-content" gridGap={4} gridTemplateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr "}} mt={{base:"20px",lg:"20px"}}>
      
      {
     griddata.map((e)=>(<>
           <ProductDetails5 key={e.id} id={e.id} image={e.image} title={e.title} price={e.price} discount={e.discount} reviews={e.reviews}/>
        
        </>
        ))
      }    

      
    </Grid>

 </>
  )
}

export default CategoryContainer

