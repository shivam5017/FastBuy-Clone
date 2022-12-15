import React from 'react'
import {Text,Grid,GridItem,Image,Link} from "@chakra-ui/react"
import {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { json } from 'react-router-dom'
// const getData=(e)=>{
//   return axios.get(`http://localhost:4000/api/products/?_category=${text}`)
// }
// var output=json.parse(localStorage.getItem("item"))||[];
const Grid2 = () => {

const navigate=useNavigate();
 
 
  const handleClick=(e)=>{
   
    axios.get(`http://localhost:4000/api/products?category=${e.currentTarget.textContent}`)
    .then((res)=>localStorage.setItem("item",JSON.stringify(res.data)))
    .catch((err)=>console.log(err))
  navigate("./stores")
  }
 



  return (
    <div>
      <Text fontWeight="bold" fontSize={{base:"20px",lg:"30px"}} mt={{base:"30px",lg:"50px"}}>Shop Deals by Category</Text> 
      <Grid templateColumns={{base:"repeat(3,1fr)",lg:'repeat(6, 1fr)'}} gap={4} w={{base:"80%",lg:"90%"}} m="auto" mt="20px" ml={{base:"20px",lg:"50px"}}>
     {/* grid items */}
 <GridItem w='100%' h='40' >
 <Image w={{base:"40%",lg:"70%"}} m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd2dd8ecca4afcf87/635c089a9cf6031050e17198/gabe-mth-20221101-evergreen-icon-home-theatre.jpg?width=250&quality=80&auto=webp"/>
<Link to="./stores" fontSize="15px" color="blue" onClick={handleClick} >TV's,HomeAudio and Home Theatre Accessories</Link>

 </GridItem>

 {/*  ---*/}
 <GridItem w='100%' h='40'  >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt80295bc230b47eed/635c0859cf87d95f7d46f9c9/gabe-mth-20221101-evergreen-icon-computers-laptops.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Computers and Tablets</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1b57343a0eede8c8/635c08391fb4e757e11112c3/gabe-mth-20221101-evergreen-icon-accessories.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Computer Accessiories</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w={{base:"50%",lg:"70%"}}m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte0cdd1d8c70d53be/636182a1a86a565857b1f9d7/gabe-mth-20221101-evergreen-icon-smart-home.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Smart Home</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4a9eb187bb02212e/635c096a64e87d5f88c56c26/gabe-mth-20221101-evergreen-icon-wireless.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Cell Phones with Plans</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltf1a74a148f1a2db6/636010d1ae3c75582190ad8f/gabe-mth-20221101-evergreen-icon-portable-audio.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>HeadPhones and Portable Speakers</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image  w={{base:"40%",lg:"70%"}} m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc93105215017e892/635c0944e079731084bf0276/gabe-mth-20221101-evergreen-icon-video-games.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Video Games,Consoles,and Accessories</Link>
 </GridItem>
 
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt18c232e905c8ebdb/635c08eb7e515b5598d052f2/gabe-mth-20221101-evergreen-icon-pc-gaming.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>PC Gaming</Link>
 </GridItem>



 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltcda138ee4fee24b8/635c08be330ba0566cd69254/gabe-mth-20221101-evergreen-icon-major-appliances.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Major Appliances</Link>
 </GridItem>


 <GridItem w='100%' h='40' >
 <Image w={{base:"40%",lg:"70%"}} m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blta8533deca405da08/635c090f2746fd107d68bbd5/gabe-mth-20221101-evergreen-icon-small-appliances.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Small Kitchen Appliances</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltec7ea1176921a4da/635ffd3aeb4a5478dab73e25/gabe-mth-20221101-evergreen-vacuums.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Vacuumes</Link>
 </GridItem>

 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0118c217136dabf4/635c09589cf6031050e171c2/gabe-mth-20221101-evergreen-icon-wearable-tech.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Wearable Tech</Link>
 </GridItem>

 <GridItem w='100%' h='40' >
 <Image  w={{base:"40%",lg:"70%"}} m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc51c9142bbfcdeea/636037eda739cc5f6cbd6a28/gabe-mth-20221101-evergreen-icon-health-and-fitness.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Health & Fitness</Link>
 </GridItem>

 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt31deb054fbcd3ca5/635c0869ff305610f618b937/gabe-mth-20221101-evergreen-icon-digital-imaging.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Camera & Drones</Link>
 </GridItem>

 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc778d9165a05293a/63603635ff305610f618c19b/gabe-mth-20221101-evergreen-icon-home-toys.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Toys</Link>
 </GridItem>

 <GridItem w='100%' h='40' >
 <Image w={{base:"40%",lg:"70%"}} m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt42ba2905a709bf3c/635c0936127d2c10959f6e86/gabe-mth-20221101-evergreen-icon-sports.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Electric transportation</Link>
 </GridItem>
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7f0dc5393bffd326/6388f8655f5b0b358b7d2c3b/gabe-mth-20221101-evergreen-icon-furniture.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Home Living</Link>
 </GridItem>
 
 <GridItem w='100%' h='40' >
 <Image w="70%" m="auto" src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltbae275f8b79295d6/635c0848eb4a5478dab7320b/gabe-mth-20221101-evergreen-icon-baby.jpg?width=250&quality=80&auto=webp"/>
 <Link fontSize="15px"color="blue" onClick={handleClick}>Baby & Maternity</Link>
 </GridItem>


</Grid>
   
    </div>
  )
}

export default Grid2
