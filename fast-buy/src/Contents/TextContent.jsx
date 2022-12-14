import React from 'react'
import {Text,Box} from "@chakra-ui/react"
const TextContent = () => {
  return (
    <div>
       <Box  w={{base:"100%",lg:"50%"}} justifyContent="center" m="auto" mt="20px" fontSize={{base:"10px",lg:"10px"}}> 
       <Text fontSize={{base:"10px",lg:"20px"}} fontWeight="bold">Boxing Day Price Guarantee</Text>
      <Text>

Products indicated as “Boxing Day Price Now”, or "Boxing Day Pricing", will be priced at the same price for the start of the Best Buy Boxing Day Sale or on Boxing Day, December 26, 2022. If Best Buy lowers the price during the Boxing Day Sale, Best Buy will refund the difference in price. If the price does go lower, you can follow the steps under the “Requesting a Price Match” section to request a refund of the difference.</Text>
</Box>
    </div>
  )
}

export default TextContent
