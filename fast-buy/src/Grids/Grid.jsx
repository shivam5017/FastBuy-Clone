import { Grid,GridItem,Image,Text,Button,Box,Hide } from '@chakra-ui/react'
import React from 'react'

const Grid1 = () => {
  return (
    <div >
        <Hide below="md">
      <Grid 
  h='600px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(7, 1fr)'
  gap={4}
  ml="20px"
  mr="20px"
  mt="20px"

>
  <GridItem  rowSpan={6} colSpan={3}  backgroundImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3c7056ea106bed47/6331f4236c4f644bc2fe1af1/global-20221021-bf1-grid-bg-xs.jpg?width=599&quality=80&auto=webp"}>
   <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc0ba3f587f300d0a/63801a71f213ef108ebd8878/global-20221209-grid1-fg-bd2-xs.png?width=50p&quality=80&auto=webp" alt="chritmas-tree" justifyContent="center" m="auto" w="60%"/>
   <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt41cdc24c0162bd1d/638121505bd399105c6fcc08/global-20221209-bd2-feature-lockup-en.png" w="90%" margin="auto" mt="20px"/>
  
   <Text fontWeight="bold" color="white" fontSize="40px">Score Upto 40% Off</Text>
   <Text color="white" fontSize="18px" mt="20px">Plus, get early Boxing Day deals on wishlist-worthy gifts.</Text>
   <Button borderRadius="none" mt="20px" w="120px" h="50px" color="rgb(49,96,199)" fontWeight="bold">Shop Now</Button>
  </GridItem>

  {/* 2nd grid */}
  <GridItem colSpan={4} rowSpan={3}   backgroundImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3c7056ea106bed47/6331f4236c4f644bc2fe1af1/global-20221021-bf1-grid-bg-xs.jpg?width=599&quality=80&auto=webp"} display="flex">
    <Box>
      <Text fontWeight="bold" color="white" mt="20px"fontSize="28px">Save up to 43% on select headphones.</Text> 
       <Text  color="white" fontSize="15px"  mt="20px" alignItems="left">Gift great sound from top brands like Sony,Bose, and JBL</Text>
       <Button borderRadius="none" mt="20px" w="120px" h="50px" color="rgb(49,96,199)">Shop Now</Button>
    </Box>
    <Box>
    <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt21c457a6af6b8ca2/638e71f2bc3535195feb1885/pa-20221209-feature-fg-headphoones-m.png?width=50p&quality=80&auto=webp" w="300px" mt="30px"/>
    </Box>
   
  </GridItem>

  {/* 3rd grid */}
  <GridItem colSpan={2} rowSpan={3} backgroundImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3c7056ea106bed47/6331f4236c4f644bc2fe1af1/global-20221021-bf1-grid-bg-xs.jpg?width=599&quality=80&auto=webp"} >
      
      <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd3cf92a305e25319/638f98825a096061c71c41c2/sa-20221209-feature-grid3-fg-xs.png?width=50p&quality=80&auto=webp" w="80%" margin="auto"/>
      <Text w="80%" color="white" justifyContent="center" margin="auto">Save up to 30% on select small kitchen appliances.</Text>
      <Button borderRadius="none" mt="10px" w="90px" h="40px" color="rgb(49,96,199)" fontSize="14px">Shop Now</Button>

  </GridItem>


  {/* 4grid */}
  <GridItem colSpan={2} rowSpan={3} backgroundImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltf28bc40a1af5aa8b/634f2d434e565f1cdce28a58/global-20221101-holiday-bokeh-feature-bg-xs.jpg?width=599&quality=80&auto=webp"} >
  <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc4e7eb88be5e3e3a/635c5db50735b210dd76c0e8/computing-20221101-feature-fg-apple-jbp-xs.png?width=50p&quality=80&auto=webp" w="80%" alignItems="center" m="auto" mt="30px"/>
 <Text>Give the Gift of Apple</Text>
 <Button  borderRadius="none" mt="30px" w="90px" h="40px" color="white" bg="rgb(49,96,199)"fontSize="14px" >Shop Now</Button>
  </GridItem>
</Grid>
</Hide>
    </div>
  )
}

export default Grid1;
