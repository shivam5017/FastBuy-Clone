import { Box, Button, Divider, Flex, Heading, Input, Link,Text,Hide,Grid } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsBoxSeam,BsFacebook,BsInstagram,BsPinterest,BsTruck, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiExchangeBoxLine} from 'react-icons/ri'
import AccordianContent from "../Contents/AccordianContent"
import FooterForm from '../Contents/FooterForm'
import {Form} from "@chakra-ui/react"
import {Link as RouteLink} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import {useContext} from "react"
import { useUserAuth } from '../Context/UserAuthContext'
const names=JSON.parse(localStorage.getItem("buyername"))||[];

const Footer = () => {
    const {user,logout} =useUserAuth();
    // const [feedBack,setFeedBack]=useState({
    //     name:{names},
    //     feedBack:"",
    // })
  let buyer;
  if(user==null){
    buyer=""
  }else{
    buyer=user.displayName;
  }
   
//  let buyer=""||user.displayName;
   
     const [data,setData]=useState({
        names:buyer,
        feedback:""
     })

     const {name,feedBack}=data;

     const onInputChange= e =>{
       setData({...data,[e.target.name]:e.target.value})
     }

    const onSubmit=async e=>{
     e.preventDefault();
           await axios.post("http://localhost:4000/api/users",data);
    }
    


     


  return (
    <>
    <Hide below="md">
<Box h="850px" w="100"  bg="#f0f2f5" p="20px" mt="20px">
    <Flex h="200px" justifyContent="space-evenly">
        <Box m="20px">
        <Box pl="20px"><Icon as={AiOutlineQuestionCircle} w={100} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue">Visit our Support Center</Link>
        </Box>
        <Box m="20px">
        <Box pl="20px"><Icon as={BsBoxSeam} w={100} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue">Check your Order Status</Link>
            </Box>
            <Box m="20px">
            <Box pl="20px"><Icon as={BsTruck} w={100} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue">Shipping, Delivery & Store Pickup</Link>
            </Box>
            <Box m="20px">
            <Box pl="20px"><Icon as={RiExchangeBoxLine} w={100} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue">Returns & Exchanges</Link>
            </Box>
    </Flex>
    <Divider />
    <Flex  h="550px" justifyContent="space-between">
        <Flex  h="550px" w="60%" justifyContent="space-between">
        <Box  lineHeight="25px">
            <Text><Link color="black" fontSize="sm">Shipping, Delivery & Pickup</Link></Text>
            <Heading fontSize="md">Order & Purchases</Heading>
            <Text><Link color="black" fontSize="sm">Returns & Exchanges</Link></Text>
            <Text><Link color="black" fontSize="sm">Check Order Status</Link></Text>
            <Text><Link color="black" fontSize="sm">Price Match Guarantee</Link></Text>
            <Text><Link color="black" fontSize="sm">Product Recalls</Link></Text>
            <Text><Link color="black" fontSize="sm">Trade-In Program</Link></Text>
            <Text><Link color="black" fontSize="sm">CGift Cards</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Text><Link color="black" fontSize="sm">My Best Buy® Credit Card</Link></Text>
        <Heading fontSize="md">Payment Options</Heading>
            <Text><Link color="black" fontSize="sm">Pay Your Bill at Citibank</Link></Text>
            <Text><Link color="black" fontSize="sm">Lease to Own</Link></Text>
           
            
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Text><Link color="black" fontSize="sm">Visit our Support Center</Link></Text>
        <Heading fontSize="md">Support & Services</Heading>
            <Text><Link color="black" fontSize="sm">Shop with an Expert</Link></Text>
            <Text><Link color="black" fontSize="sm">Schedule a Service</Link></Text>
            <Text><Link color="black" fontSize="sm">Manage an Appointment</Link></Text>
            <Text><Link color="black" fontSize="sm">Protection & Support Plans</Link></Text>
            <Text><Link color="black" fontSize="sm">Haul Away & Recycling</Link></Text>
            <Text><Link color="black" fontSize="sm">Contact Us</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="md">Rewards & Membership</Heading>
        <Text><Link color="black" fontSize="sm">Rewards & Membership</Link></Text>
            <Text><Link color="black" fontSize="sm">My Best Buy</Link></Text>
            <Text><Link color="black" fontSize="sm">View Points & Certificates</Link></Text>
            <Text><Link color="black" fontSize="sm">Member Offers </Link></Text>
        </Box>
        </Box>
        <Box  lineHeight="25px">
        <Heading fontSize="md">Partnerships</Heading>
        <Text><Link color="black" fontSize="sm">Affiliate Program</Link></Text>
            <Text><Link color="black" fontSize="sm">Advertise with Us</Link></Text>
            <Text><Link color="black" fontSize="sm">Developers</Link></Text>
            <Text><Link color="black" fontSize="sm">Best Buy Health</Link></Text>
            <Text><Link color="black" fontSize="sm">Best Buy Education</Link></Text>
            <Text><Link color="black" fontSize="sm">Best Buy Business</Link></Text>
            <Box  lineHeight="25px" mt="40px">
        <Heading fontSize="md">About Best Buy</Heading>
        <Text><Link color="black" fontSize="sm">Corporate Information</Link></Text>
            
            <Text><Link color="black" fontSize="sm">Careers</Link></Text>
            <Text><Link color="black" fontSize="sm">Corporate Responsibility & Sustainability</Link></Text>
            <Text><Link color="black" fontSize="sm">Discover & Learn</Link></Text>
           
            
        </Box>
        </Box>
        </Flex>
        <Box bg="rgb(240,242,245)" h="550px" w="30%" p="20px"  >
            <Text ><RouteLink color="black" to="./signup">Sign in or Create Account</RouteLink></Text>
            <Divider m="20px" />
        <Heading fontSize="xl">FeedBacks</Heading>
        <Flex mt="20px">
         <form onSubmit={e=>onSubmit(e)}>
        <input placeholder='Give your Feedback' type="text" name="feedback"  onChange={e=>onInputChange(e)}/>
        <button colorScheme='black' color="black" >Submit</button>
        </form>
        </Flex>
        <Divider m="20px" />
        <Heading fontSize="2xl">Best Buy app</Heading>
        <Link color="black">Learn More</Link>
        <Divider m="20px" />
        <Flex justifyContent="space-between" mt="20px">
      <Box>
      <Icon as={BsFacebook} w={10} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsTwitter} w={10} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsInstagram} w={10} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsPinterest} w={10} h={10} pt="0.2rem" color="black"/>
      </Box>
      <Box>
      <Icon as={BsYoutube} w={10} h={10} pt="0.2rem" color="black"/>
      </Box>
        </Flex>
        <Divider m="20px" />
        <Box>
            <Link color="black">Forums, blogs & more</Link>
        </Box>
        </Box>
    </Flex>
    <Divider m="10px"/>
    <Flex fontSize="sm" justifyContent="space-between" mt="-2px">
        <Box >
        <Text>How was your experience?
         <Link color="black"> Give feedback about our website</Link></Text>
        </Box>
        <Box >
            <Text>Best Buy <Link color="black">Canada</Link></Text>
        </Box>
    </Flex>
</Box>
</Hide>
 <Hide above="md">
  <Grid>
    <Flex>
         <Box pl="10px" ml="20px"><Icon as={AiOutlineQuestionCircle} w={10} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue" mt="40px" ml="50px">Visit our Support Center</Link>
    
      </Flex>  
    <Flex>
    <Box pl="10px" ml="20px" mt="-32px"><Icon as={BsBoxSeam} w={10} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue" ml="50px">Check your Order Status</Link>
    
    </Flex>
    <Flex>
    <Box pl="10px" ml="20px" mt="-32px"><Icon as={BsTruck} w={10} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue" ml="50px">Shipping, Delivery & Store Pickup</Link>
    </Flex>
    <Flex>
    <Box pl="10px" ml="20px" mt="-32px"><Icon as={RiExchangeBoxLine} w={10} h={100} pt="0.2rem" color="blue"/></Box>
        <Link color="blue" ml="50px">Returns & Exchanges</Link>
  
    </Flex>
  </Grid>

  <Box>
    <AccordianContent />
    <FooterForm />
  </Box>

 </Hide>

    </>
  )
}

export default Footer