import React from 'react'
import {Box,Text} from "@chakra-ui/react"
import erro from  "../Images/erro.png"


const Add2 = () => {
  return (
    <div>
            <Box boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" display="flex" >
      <Box w={{base:"70%",lg:"40%"}} ml={{base:"0",lg:"15%"}} >
      <Text fontWeight="bold" fontFamily="sans-serif" fontSize={{base:"9px",lg:"15px"}}>Save Up to $125 on select eero whole-home Wi-Fi systems.</Text>
      </Box>
      <Box  w="40%" display="flex" justifyContent="space-around"> 
      <img src={erro} style={{height:"20px"}}/>
      <Text color="rgb(49,96,199)" fontWeight="bold" fontSize={{base:"10px",lg:"15px"}}>Shop Now...</Text>
      </Box>
    </Box>
      
    </div>
  )
}

export default Add2;
