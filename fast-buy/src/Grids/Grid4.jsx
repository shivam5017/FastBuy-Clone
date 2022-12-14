
import {Text,Grid,GridItem,Image,Link,Box, Button} from "@chakra-ui/react"
import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"
import ProductDetails from "../ProductDetails/ProductDetails"

const getItems=()=>{

return axios.get(`http://localhost:4000/api/products/?_limit=4`)


}


const Grid4 = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    getItems()
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))

  },[])



  return (
    <div>
      <Box border="1px solid white" h="fit-content" mt={{base:"0",lg:"100px"}} backgroundImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt662cda20b06ec391/6351cae2bbff0b3fd98e2f64/global-2022-bf-offerlist-bg.jpg?width=1920&quality=80&auto=webp"}>
           <Text fontWeight="bold" w={{base:"100%",lg:"100%"}} fontSize={{base:"20px",lg:"30px"}} mt={{base:"50px",lg:"80px"}}>Fantastic savings on gifts they’ll love</Text>
           
            <Grid w="full" h="fit-content" gridGap={4} gridTemplateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr 1fr"}} mt={{base:"20px",lg:"20px"}}>
      
        {
       data.map((e)=>(<>
            <ProductDetails key={e.id} id={e.id} image={e.image} title={e.title}/>
          
          </>
          ))
        }    

        
      </Grid>

      </Box>
    </div>
  )
}

export default Grid4
