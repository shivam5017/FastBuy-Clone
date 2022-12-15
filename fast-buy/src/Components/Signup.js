import {Link as RouteLink } from "react-router-dom" 

import React from 'react'
import {Box,Text,Input, Button,Image, Alert} from "@chakra-ui/react"
import { async } from '@firebase/util'
import {useState,useEffect} from "react"
// import { createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut,AuthErrorCodes} from 'firebase/auth' 
import {auth} from "../firebase-config"
import website from "../Images/website.jpg"
import { Navigate } from 'react-router-dom'
import {MdOutlineShoppingCart} from "react-icons/md"
import {MdLocationPin} from "react-icons/md"
import {RxCounterClockwiseClock} from "react-icons/rx"
import { IconButton } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import {RiAccountCircleLine} from "react-icons/ri"
import { useUserAuth } from "../Context/UserAuthContext"
import { AlertDialog } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
const Signup = () => {

 const navigate=useNavigate()
    const [registerEmail,setRegisterEmail]=useState("")
    const [registerPassword,setRegisterPassword]=useState("")
    const [name,setName]=useState("")
  const [error,setError]=useState("")
    const {signUp} = useUserAuth()

     const Register=async()=>{
         setError("")
         try{
            await signUp(registerEmail,registerPassword,name)
            console.log(signUp)
            navigate("/")
         }catch(err){
             setError(err.message)
         }
     }



  return (
    <div>
              <Box  display="flex">
              
              <Box  h="fit-content" w="50%" mt="100px" lineHeight={10}>
                <Text color="rgb(0,70,190)" fontSize="40px" fontStyle="oblique" fontWeight="bold"  ml="-30%">Create an Account</Text>
                {
                    error && <Text variant="danger">{error}</Text>
                }
                <Text ml="-60%" mt="50px">User Name</Text>
                 <Input placeholder='Username' onChange={(e)=>{setName(e.target.value)}} w="80%"/>
                 
                  <Text ml="-60%" mt="50px">Email Address</Text>
                 <Input placeholder='Email..' onChange={(e)=>{setRegisterEmail(e.target.value)}} w="80%"/>
                 <Text ml="-65%">Password</Text>
                 <Input placeholder='Password'  onChange={(e)=>{setRegisterPassword(e.target.value)}} w="80%"/>
                 <Box w="65%" ml="100px" alignItems="left">
                 <Checkbox defaultChecked textAlign="left" ml="-20px">Sign up for our newsletter to stay in the loop about hot deals, new products, and more. Don’t worry, you can unsubscribe at any time.</Checkbox>
                  
                 </Box>
                 <Button w="20%" mt="20px" bg="rgb(255,206,0)" borderRadius="none" color="black" onClick={Register}>Create Account</Button>
                 <Text>By continuing you agree to our <Highlight query='Terms and Conditions'  styles={{color:"blue",fontWeight:"bold"}}>Terms and Conditions</Highlight> and  <Highlight query='Privacy Policy.'  styles={{color:"blue",fontWeight:"bold"}}>Privacy Policy.</Highlight></Text>
                 
                 {/* <Text  color="rgb(0,70,190)" fontSize="15px" fontWeight="bold" mt="20px">Forget password?</Text> */}
                 <Box display="flex" justifyContent="center">
                 <RiAccountCircleLine />
                 <Text mt="-10px">Already have an account?</Text>
                 
                 </Box>
                 <RouteLink to="/login" bg="none" color="rgb(0,70,190)" fontSize="20px" fontWeight="bold">Sign In</RouteLink> 
        
              </Box>
        
              <Box  h="350px" w="50%" mt="100px" lineHeight={10}>
                <Text fontSize="20px" fontWeight="bold">Here are some of the benefits you’ll enjoy:</Text>
               
                <Box display="grid" mt="100px">
                    <Box fontSize="20px" fontWeight="bold">
                <IconButton aria-label='Search database'  bg="white" icon={<MdOutlineShoppingCart color="rgb(0,70,190)"/>}></IconButton>Fast checkout.
                </Box>
                <Box fontSize="20px" fontWeight="bold">
                <IconButton aria-label='Search database' bg="white" icon={<MdLocationPin color="rgb(0,70,190)"/>}></IconButton>Easy tracking.
                </Box> <Box fontSize="20px" fontWeight="bold">
                <IconButton aria-label='Search database'  bg="white" icon={<RxCounterClockwiseClock color="rgb(0,70,190)"/>}></IconButton>Quick recap.
                </Box>
                </Box>
              </Box>
         
          
         
            </Box>
        
      
    </div>
  )
}

export default Signup
