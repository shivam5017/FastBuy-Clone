import React from 'react'
import {Hide,Box,Menu,Flex,MenuItem,MenuList,MenuButton,Button} from "@chakra-ui/react"
import  {ChevronLeftIcon,ChevronDownIcon}  from '@chakra-ui/icons'



const Navbar2 = () => {
  return (
  
    <Hide below='md'>
      {/* <Hide below="lg"> */}
        <Box bg="rgb(0,61,166)" px={4} h="50px">
      <Flex h={16} alignItems={'center'}>
      <Menu>
  <MenuButton as={Button}   background="none" _hover="none" color="white" fontWeight="bold" bg="none"rightIcon={<ChevronDownIcon />}>
    Shop
  </MenuButton>
  <MenuList overflow="auto" height="430px">
  <MenuItem  fontWeight="bold">Holiday Deals</MenuItem>
    <MenuItem>Give The Gift Of Tech</MenuItem>
    <MenuItem>BestBuy Outlet</MenuItem>
    <MenuItem>Holiday Gift Guide</MenuItem>
    <MenuItem>Holiday Decor</MenuItem>
    <MenuItem  fontWeight="bold">Shop by Category</MenuItem>
    <MenuItem>computer,Tablets, & Accessories</MenuItem>
    <MenuItem>Cell Phones and Accessories</MenuItem>
    <MenuItem>Office Supplies & Ink</MenuItem>
    <MenuItem>TV & Home Theater</MenuItem>
    <MenuItem>Headphones,Speakers, & Audio</MenuItem>
    <MenuItem>Cameras,Camcorders & Drones</MenuItem>
    <MenuItem>Car tech and Gps</MenuItem>
    <MenuItem>Appliances</MenuItem>
    <MenuItem>Smart Home</MenuItem>
    <MenuItem>Home Living</MenuItem>
    <MenuItem>Baby & Maternity</MenuItem>
    <MenuItem>Video Games & VR</MenuItem>
    <MenuItem>Wearadble Technology</MenuItem>
    <MenuItem>Health & Fitness</MenuItem>
    <MenuItem>Sports,Recreation, & Transportation</MenuItem>
    <MenuItem>Movies & Music</MenuItem>
    <MenuItem>Musical Instruments & Equipments</MenuItem>
    <MenuItem>Beauty</MenuItem>
    <MenuItem>Personal care</MenuItem>
    <MenuItem>Travel,Luggage & Bags</MenuItem>
    <MenuItem>Watches,Jewelry & fashion</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}   background="none" _hover="none" color="white" fontWeight="bold" bg="none"rightIcon={<ChevronDownIcon />}>
    Deals
  </MenuButton>
  <MenuList overflow="auto" height="235px">
 
    <MenuItem>Give The Gift Of Tech</MenuItem>
    <MenuItem>BestBuy Outlet</MenuItem>
    <MenuItem>Refurbished Product</MenuItem>
    <MenuItem>Open Box Products</MenuItem>
    <MenuItem>Geek Squad Certified Open Box Products</MenuItem>
    <MenuItem>Clearance Products</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}   background="none" _hover="none" color="white" fontWeight="bold" bg="none"rightIcon={<ChevronDownIcon />}>
    Services
  </MenuButton>
  <MenuList overflow="auto" height="380px" >
  
    <MenuItem>Give The Gift Of Tech</MenuItem>
    <MenuItem>In Home Advisor</MenuItem>
    <MenuItem>Trade-In Program</MenuItem>
    <MenuItem>Monthly Subscription</MenuItem>
    <MenuItem>Electronic Recycling</MenuItem>
    <MenuItem>Best Buy MemberShip</MenuItem>
    <MenuItem>Best Buy Proteciton</MenuItem>
    <MenuItem>Best Buy Business</MenuItem>
    <MenuItem>Best Buy Health</MenuItem>
  </MenuList>
</Menu>
      </Flex>
     </Box>
     {/* </Hide> */}
     </Hide>
  )
}

export default Navbar2
