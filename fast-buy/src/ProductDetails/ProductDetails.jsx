import React from 'react'
import {Text,Image,Box,Heading, Button} from "@chakra-ui/react"
import TextTruncate from 'react-text-truncate';

const ProductDetails = ({image,title}) => {
  return (
  
      <Box boxShadow={"2xl"}  >
           <Image src={image} w="100%"/>
           <TextTruncate
    line={2}
    fontSize={{base:"10px",lg:"20px"}}
    element="span"
    truncateText="…"
    text={title}
    textTruncateChild={<a href="#">Read on</a>}
/>
           <Button bg="none" color="rgb(38,71,190)">Shop Now</Button>
      </Box>
  )
}

export default ProductDetails
