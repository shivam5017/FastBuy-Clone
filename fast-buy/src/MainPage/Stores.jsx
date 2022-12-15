import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,Stack, Button
} from '@chakra-ui/react'
import Add1 from '../Adds/adds'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import React from 'react'
import { json } from 'react-router-dom'
import ProductDetails4 from '../ProductDetails/ProductDetails'
import { Grid } from '@chakra-ui/react'
import CategoryContainer from "../Contents/CategoryContainer"
import {useState,useEffect} from "react"
import Footer  from "../Components/Footer"
const griddata=JSON.parse(localStorage.getItem("item"))||[];

const Stores = () => {
  
  const [state,setState]=useState(false)
  const [show,setShow]=useState(true)

  const handleRefresh=()=>{
    window.location.reload()
    setState(true)
  }

  useEffect(()=>{
     setTimeout(function (){
      setShow(false)
     },2000)
  },[])
  

  return (
    <div>
    
      <Add1 />
        <Navbar />
      <Navbar2 />
      {/* <Button w="10%" h="25px" fontSize="10px" onClick={handleRefresh} >Refresh</Button> */}
     <Stack spacing={3}>
     {
        show? state?<Alert status='error'>
         <AlertIcon />
         There was an error processing your request
        </Alert> :   <Alert status='success'>
            <AlertIcon set/>
            SuccessFull
          </Alert>:<></>
     }
</Stack>

  
      {/* <Grid w="full" h="fit-content" gridGap={4} gridTemplateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr 1fr"}} mt={{base:"20px",lg:"20px"}} border="4px solid red">
      {
          griddata.map((e)=>{
                <ProductDetails4 key={e.id} title={e.title} />
          })
      }

        </Grid> */}
 <CategoryContainer />
 <Footer />
    </div>
  )
}

export default Stores
