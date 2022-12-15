
import React from 'react'
import {Box,Text,Input, Button,Image} from "@chakra-ui/react"
import { async } from '@firebase/util'
import {useState,useEffect} from "react"
import { createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut,AuthErrorCodes} from 'firebase/auth' 
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
const Account = () => {
    
 
     const [registerEmail,setRegisterEmail]=useState("")
     const [registerPassword,setRegisterPassword]=useState("")
     const [loginEmail,setLoginEmail]=useState("")
     const [loginPassword,setLoginPassword]=useState("")
     const [name,setName]=useState("")
    const [user,setUser]=useState({})
 
     onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
     })
     const [state, setState] = useState(false);

     const handlePages = () => {
       setState(!state);
     };
      
      const register=async()=>{
        try{
         const user= await createUserWithEmailAndPassword(auth,registerEmail,registerPassword,name)
         console.log(user)
        }
        catch(error){
            console.log(error.message)
        }
      
        }

      const login=async()=>{
        try{
            const user= await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
            console.log(user)
           }
           catch(error){
               console.log(error.message)
           }
      }

      const logout=async()=>{
          await signOut(auth)
      }

  return (

    <>

<Box bg="rgb(0,70,190)" h={{base:"60px",lg:"70px"}} mt={{lg:"-10px"}}>
           <Image src={website} w="60px" borderRadius="50%" pt="5px" ml="25px"/>
        </Box>
    
    {
        state?(<>  <Box>
        






    
            <Box  display="flex">
              
              <Box  h="fit-content" w="50%" mt="100px" lineHeight={10}>
                <Text color="rgb(0,70,190)" fontSize="40px" fontStyle="oblique" fontWeight="bold"  ml="-30%">Create an Account</Text>
                <Text ml="-60%" mt="50px">User Name</Text>
                 <Input placeholder='Username' onChange={(e)=>{setName(e.target.value)}} w="80%"/>
                 
                  <Text ml="-60%" mt="50px">Email Address</Text>
                 <Input placeholder='Email..' onChange={(e)=>{setRegisterEmail(e.target.value)}} w="80%"/>
                 <Text ml="-65%">Password</Text>
                 <Input placeholder='Password'  onChange={(e)=>{setRegisterPassword(e.target.value)}} w="80%"/>
                 <Box w="65%" ml="100px" alignItems="left">
                 <Checkbox defaultChecked textAlign="left" ml="-20px">Sign up for our newsletter to stay in the loop about hot deals, new products, and more. Don’t worry, you can unsubscribe at any time.</Checkbox>
                  
                 </Box>
                 <Button onClick={register} w="20%" mt="20px" bg="rgb(255,206,0)" borderRadius="none" color="black">Create Account</Button>
                 <Text>By continuing you agree to our <Highlight query='Terms and Conditions'  styles={{color:"blue",fontWeight:"bold"}}>Terms and Conditions</Highlight> and  <Highlight query='Privacy Policy.'  styles={{color:"blue",fontWeight:"bold"}}>Privacy Policy.</Highlight></Text>
                 
                 {/* <Text  color="rgb(0,70,190)" fontSize="15px" fontWeight="bold" mt="20px">Forget password?</Text> */}
                 <Box display="flex" justifyContent="center">
                 <RiAccountCircleLine />
                 <Text mt="-10px">Already have an account?</Text>
                 
                 </Box>
                 <Button bg="none" color="rgb(0,70,190)" fontSize="20px" fontWeight="bold" onClick={handlePages}>Sign In</Button> 
        
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
        
            <Text>UserLoggedIn:</Text>
   {user?.email}
        
            </Box></>):(<>
            
            <Box>
         




    
         <Box display="flex">
           
           <Box  h="fit-content" w="50%" mt="100px" lineHeight={10}>
             <Text color="rgb(0,70,190)" fontSize="40px" fontStyle="oblique" fontWeight="bold"  ml="-30%">Sign In</Text>
               <Text ml="-60%" mt="50px">Email Address</Text>
               <Input placeholder='Email..'  onChange={(e)=>{setLoginEmail(e.target.value)}} w="80%"/>
              <Text ml="-65%">Password</Text>
              <Input placeholder='Password' onChange={(e)=>{setLoginPassword(e.target.value)}} w="80%"/>
          <Box display="flex" m="auto" justifyContent="center" gap="50px">
              <Button onClick={login} w="30%" mt="20px" bg="rgb(0,70,190)" borderRadius="none" color="white">Sign In</Button>
             
              
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
               
              <Button bg="none" color="rgb(0,70,190)" fontSize="20px" fontWeight="bold" onClick={handlePages}>Create an Account</Button> 
     
           </Box>
      
       
      
         </Box>
     
     
     
         </Box>
       </>)
    }
 

      

</>
  )
}

export default Account

