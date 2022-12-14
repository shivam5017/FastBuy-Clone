import React from 'react'
import {Flex,Box,Grid,Image,Input,HStack,Show,Hide} from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import logo from "../Images/logo.png"
import {SearchIcon,HamburgerIcon} from "@chakra-ui/icons"
import {Link as RouterLink} from "react-router-dom"
import {FaStoreSlash} from "react-icons/fa"
import {VscAccount} from "react-icons/vsc"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { IconButton,AccordionButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'







const Navbar = () => {
  const navigate = useNavigate();


  const handleDealClick=()=>{
    navigate("/DealsOfDay");

  }

  const handleStoresClick=()=>{
    navigate("/stores");

  }
  
  const handleAccountClick=()=>{
    navigate("/account");

  }

   const handleCartClick=()=>{
    navigate("/cart");

   }


  return (
    <div>
      <Box  bg="rgb(38,71,190)" w={{base:"100%",lg:"100%"}} h={{base:"100px",lg:"150px"}} mt={{base:"-10px",lg:"-30px"}} display={{base:"grid",lg:"flex"}} >

           <Image src={logo} w={{base:"50px",lg:"150px"}} ml={{base:"20px",lg:"20px"}} mt={{base:"8px"}} />  
   <Hide above="md">
          <Menu >
  <MenuButton bg="none"   w="0" ml="10px"
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon color="white" w="50px" />}
    variant='none'
  />
   <MenuList>
   <RouterLink to="./stores">
    <MenuList >
      Shop
      <MenuItem fontSize="20px">
          Holiday deals
      </MenuItem>
      <MenuItem>
       Give the Gift of Tech
      </MenuItem>
      <MenuItem>
       BestBuy Outlet
      </MenuItem>
      <MenuItem>
        Holiday Gift Guide
      </MenuItem>
      <MenuItem>
       Holiday Decor
      </MenuItem>
    </MenuList>
    </RouterLink>
    <RouterLink to="./dealsofDay">
    <MenuList >
      Deals
      <MenuItem>
       Give the Gift of Tech
      </MenuItem>
      <MenuItem>
       BestBuy Outlet
      </MenuItem>
      <MenuItem>
       Refurbished Product
      </MenuItem>
      <MenuItem>
       Open Box Product
      </MenuItem>
      <MenuItem>
       Geek Squad Certified Open Box Products
      </MenuItem>
    </MenuList>
    </RouterLink>
  </MenuList>
</Menu>
</Hide>
        
           <Input bg="white" w={{base:"60%",lg:"40%"}} mt={{base:"-40px",lg:"40px"}} ml={{base:"80px",lg:"20px"}} h={{base:"40px",lg:"55px"}} borderRadius="none" border="none" placeholder='Search Best Buy'/>
            <Box bg="white" h={{base:"40px",lg:"55px"}} mt={{base:"-41.5px",lg:"40px"}} w={{base:"30px",lg:"30px"}} ml={{base:"80%",lg:"0"}} >
           <SearchIcon color="rgb(38,71,190)" w="100%" mt={{base:"3",lg:"20px"}} ml={{base:"-2px"}} />
           </Box>
         {/* part 2 */}
            
           <HStack spacing='22px' mt={{base:"-30%",lg:"22px"}} ml={{base:"190px",lg:"150px"}} bg="none">

<Hide below='md'>
<Box w='50px' h='40px' bg='none' color="white" fontWeight="bold" onClick={handleDealClick}>
             Deals
          </Box>
</Hide>



   
   <Box  w={{base:"2px",lg:"10px"}} h='40px' bg='none' gap={2}>
     <FaStoreSlash color="white" size={20}  mr={{base:"20px"}}/>
   </Box>

     
       <Hide below='md'>
        <Box w='50px' h='40px' bg='none' color="white" fontWeight="bold" text={{base:"hidden"}} onClick={handleStoresClick}>
             Stores
          </Box>
          </Hide>
          
          
         
          <Box  w='10px' h='40px' bg='none'>
           <VscAccount color="white" size={20} />
          </Box>
          
       
          <Hide below='md'>
        <Box  w='70px' h='40px' bg='none' color="white" fontWeight="bold" onClick={handleAccountClick}>
         Account
         </Box>
         </Hide>
         
         
          
         <Box   w='10px' h='40px' bg='none'>
           <AiOutlineShoppingCart color="white" size={20}/>
         </Box>
      
         
         <Hide below='md'>
      <Box  w='70px' h='40px' bg='none' color="white" fontWeight="bold" onClick={handleCartClick}>
      Cart
     </Box>
     </Hide>
     
</HStack>
           </Box>
           

        
    </div>
  )
}

export default Navbar
