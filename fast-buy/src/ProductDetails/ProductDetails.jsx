import React from 'react'
import {Text,Image,Box,Heading, Button} from "@chakra-ui/react"
import TextTruncate from 'react-text-truncate';
import { useContext } from 'react'

const ProductDetails = ({image,title,obj}) => {

  const addToCart=()=>{

    console.log("click")
  }
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
{/* <Button onClick={()=>change.changeArr(obj)} mt="50px" size="sm" varient="solid" colorScheme='yellow' bg="#ffe000" leftIcon={<Icon as={AiOutlineShoppingCart} w={30} h={30} pt="0.2rem"/>}>Add to Cart</Button> */}
           <Button bg="none" color="rgb(38,71,190)"  onClick={addToCart} >Shop Now</Button>
      </Box>
  )
}

export default ProductDetails
