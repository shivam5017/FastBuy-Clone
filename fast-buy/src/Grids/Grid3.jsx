import React from 'react'
import {Text,Grid,GridItem,Image,Link} from "@chakra-ui/react"



const Grid3 = () => {
  return (
    <div>
          <Text fontWeight="bold" fontSize={{base:"20px",lg:"30px"}} mt={{base:"30px",lg:"50px"}}>Get inspired with gift ideas</Text>

          <Grid templateColumns={{base:"repeat(3,1fr)",lg:'repeat(6, 1fr)'}} gap={4} w={{base:"80%",lg:"90%"}} m="auto" mt="20px" ml={{base:"20px",lg:"50px"}}>
     {/* grid items */}
 <GridItem w='100%' h='40' >
 <Image w={{base:"60%",lg:"60%"}} m="auto" mt={{base:"4px"}} src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9eb934d7673553d7/638908795f5b0b358b7d2cd9/global-evergreen-icon-hgg.jpg?width=250&quality=80&auto=webp"/>
<Link to="./stores" fontSize="15px" color="blue">Holiday Gift Guide</Link>

 </GridItem>

 {/*  ---*/}
 <GridItem w='100%' h='40'  >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltddf15b05548ffdcd/61687ee0e557ba1024b616e0/global-hgg-20211101-gift-icon-50-en.png?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px" color="blue">Shop Now</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7e1ecff2d26a8681/61687ecd0d172d03af620ce9/global-hgg-20211101-gift-icon-100-en.png?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue">Shop Now</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w={{base:"50%",lg:"70%"}}m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte1f880a9e0e3295d/61687ed6e557ba1024b616de/global-hgg-20211101-gift-icon-250-en.png?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue">Shop Now</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt008600af89a68f4d/61687ef39b2a360198311afe/global-hgg-20211101-gift-icon-400-en.png?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue">Shop Now</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltcc8030a9f8627842/61687eea9b2a360198311afc/global-hgg-20211101-icon-giftcards-en.png?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue">Shop Now</Link>
 </GridItem>

 </Grid>
      
    </div>
  )
}

export default Grid3
