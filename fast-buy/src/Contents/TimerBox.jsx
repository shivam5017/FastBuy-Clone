import { Box, Flex, Heading, Link,Text, Image, Highlight, Button, Icon, Divider, Grid } from "@chakra-ui/react";
import React from 'react'
import Timer1 from "../Timer/Timer"
const TimerBox = () => {
  return (
    <div>
        <Box h={{base:"80px",lg:"140px"}} bg="#0046bf" mt="5px">
        <Flex padding="20px">
       <Box  w={{base:"500px"}} mt={{base:"-10px",lg:"-10px"}} >
   <Heading fontSize={{base:"15px",lg:"40px"}} color="black"> <Highlight query='Deal'  styles={{bg:"red",color:"white"}}>Deal</Highlight> of the Day.</Heading>
   <Heading as="h6" size="sm" fontWeight={{base:"bold",lg:"bold"}} fontSize={{base:"8px",lg:"20px"}} color="black">
              Great new deals. Every day.
            </Heading>
            <Link color="yellow" fontSize={{base:"10px",lg:"20px"}}>See Deal of the Day FAQs</Link>

         {/* <Box color="black" lineHeight={{base:"1rem",lg:"3rem"}} w="100%" ml="10%" border="4px solid black">
            <Heading ><Highlight query='Deal'  styles={{bg:"Yellow",color:"black"}}>Deal</Highlight> of the Day.</Heading>
            <Heading as="h6" size="sm" fontWeight={{base:"20px",lg:"1rem"}}>
              Great new deals. Every day.
            </Heading>
            <Link color="yellow">See Deal of the Day FAQs</Link>
          </Box> */}
       </Box>
          <Box
           mt={{base:"-15px",lg:"10px"}}
            bg="white"
            w={{base:"400px",lg:"200px"}}
            h={{base:"60px",lg:"80px"}}
            borderRadius="0.2rem"
            ml="30%"
            p="10px"
            pl="20px"
            
          >
            <Heading fontWeight="10px" fontSize={{base:"20px",lg:"40px"}}>
              <Timer1 />
            </Heading>
            <Text size="xl" fontSize={{base:"8px",lg:"10px"}} >
              hours minutes seconds
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default TimerBox
