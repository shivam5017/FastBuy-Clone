import { GridItem, Icon } from '@chakra-ui/react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsBoxSeam,BsFacebook,BsInstagram,BsPinterest,BsTruck, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiExchangeBoxLine} from 'react-icons/ri'
import AccordianContent from "../Contents/AccordianContent"
import {Box,Text,Input,Flex, Button,Grid} from "@chakra-ui/react"
import React from 'react'

const FooterForm = () => {
  return (
    <div>
        <Box bg="rgb(240,242,245)" h="300px">
           <Box>
             <Text fontSize="20px" fontWeight="bold" textAlign="left" ml="18px">
             Be the first to know
             </Text>
             <Text ml="-8px">
             Sign up to stay in the loop about the hottest deals, coolest new products, and exclusive sales events.
             </Text>
           <Flex>

           <Input bg="white" w="60%" placeholder="Email Adress" mt="20px" h="50px" ml="10px" borderRadius="none"/>
           <Button bg="rgb(0,70,190)" mt="21px" h="50px" borderRadius="none" color="white">Sign Up</Button>
           </Flex>
             

           </Box>
        
           <Flex justifyContent="space-around" mt="20px">
      <Box>
      <Icon as={BsFacebook} w={7} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsTwitter} w={7} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsInstagram} w={7} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsPinterest} w={7} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsYoutube} w={7} h={10} pt="0.2rem" color="black"/>
      </Box>
        </Flex>

        <Text fontSize="10px">© Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC V5Y 1L3</Text>
         <Grid templateColumns="repeat(3,1fr)" fontSize="10px" gap={1} mt="5px">
           <Text>Terms & Conditions</Text>
           <Text>Conditions of Use</Text>
           <Text>Online Policies</Text>
           <Text>Interest-Based Ads</Text>
           <Text>Privacy Policy</Text>
           <Text>Accessibility Policy</Text>
           <Text>Geek Squad Terms & Conditions</Text>
           <Text>Product Recalls</Text>
           <Text>
             Credits
            </Text>
         </Grid>

        </Box>
      
    </div>
  )
}

export default FooterForm
