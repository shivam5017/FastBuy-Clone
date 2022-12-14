

import React from 'react'
import {Text,Box} from "@chakra-ui/react"
import axios from 'axios'
import ProductDetails3 from '../ProductDetails/ProductDetails3'
import {useState,useEffect} from "react"

const getItems=()=>{

    return axios.get(`http://localhost:4000/api/products/?_limit=1`)
    
    }
    


const DealsContainer = () => {


    const [data,setData]=useState([])

    useEffect(()=>{
      getItems()
      .then((res)=>  
      setData(res.data))
      .catch((err)=>console.log(err))
  
    },[])
  
 

  return (
    <div>

{
       data.map((e)=>(<>
            <ProductDetails3 key={e.id} id={e.id} image={e.image} title={e.title} price={e.price} discount={e.discount} reviews={e.reviews}/>
          
          </>
          ))
        }    

    </div>
  )
}

export default DealsContainer
