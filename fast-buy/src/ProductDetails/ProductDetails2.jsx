import React from 'react'
import {Text,Image,Box,Heading, Button} from "@chakra-ui/react"
import TextTruncate from 'react-text-truncate';


const ProductDetails2 = ({image,title,modelNumber,reviews,discount,price}) => {
  return (
  
      <Box boxShadow={"2xl"}  w="100%" h="100%" mt="20px">
           <Image src={image} w="400px" m="auto" />
           <TextTruncate
    line={2}
    fontSize={{base:"10px",lg:"20px"}}
    element="span"
    truncateText="…"
    text={title}
    textTruncateChild={<a href="#">Read on</a>}
/>
           <Text fontSize={{base:"10px",lg:"20px"}}>{modelNumber}</Text>
           <Text fontSize={{base:"10px",lg:"20px"}}>reviews({reviews})</Text>
           <Text fontSize={{base:"10px",lg:"20px"}} color="rgb(187,6,40)" fontWeight="bold">Save ${discount}</Text>
           <Text fontSize={{base:"10px",lg:"20px"}} color="rgb(187,6,40)" fontWeight="bold">${price}</Text>
         
      </Box>
  )
}

export default ProductDetails2
