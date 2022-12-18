
import {Link as RouteLink } from "react-router-dom" 

import React from 'react'
import {Box,Text,Input, Button,Image} from "@chakra-ui/react"
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
import { useNavigate } from "react-router-dom"
import { Spinner } from '@chakra-ui/react'
const Login = () => {
    const navigate=useNavigate("")
    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")
  
  const [error,setError]=useState("")
    const {logIn} = useUserAuth()
    const SignIn=async()=>{
        setError("")
        try{
           await logIn(loginEmail,loginPassword)
          if(loginEmail=="admin@gmail.com" && loginPassword=="admin123"){
            navigate("/AdminPage")
          }else{
            navigate("/") 
          }
           
        }catch(err){
            setError(err.message)
        }
    }
    
const [loading,setLoading]=useState(false)

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, []);

 


  return (
    <div>
           {
            loading?(   <Spinner m="auto" justifyContent="center" mt="20%"/>):( <Box>
         




    
              <Box display="flex">
                
                <Box  h="fit-content" w="50%" mt="100px" lineHeight={10}>
                  <Text color="rgb(0,70,190)" fontSize="40px" fontStyle="oblique" fontWeight="bold"  ml="-30%">Sign In</Text>
                    <Text ml="-60%" mt="50px">Email Address</Text>
                    <Input placeholder='Email..'  onChange={(e)=>{setLoginEmail(e.target.value)}} w="80%"/>
                   <Text ml="-65%">Password</Text>
                   <Input placeholder='Password' onChange={(e)=>{setLoginPassword(e.target.value)}} w="80%"/>
               <Box display="flex" m="auto" justifyContent="center" gap="50px">
                   <Button w="30%" mt="20px" bg="rgb(0,70,190)" borderRadius="none" color="white" onClick={SignIn}>Sign In</Button>
                  
                   
                   <Text  color="rgb(0,70,190)" fontSize="15px" fontWeight="bold" mt="20px">Forget password?</Text>
             
                </Box>
                </Box>
                <Box h="350px" w="50%" mt="100px" lineHeight={10}>
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
                    
                   <RouteLink to="/signup"><Button w="30%" mt="20px" bg="rgb(0,70,190)" borderRadius="none" color="white">Create an Account</Button></RouteLink> 
          
                </Box>
           
            
           
              </Box>
          
          
          
              </Box>)
           }
    </div>
  )
}

export default Login
