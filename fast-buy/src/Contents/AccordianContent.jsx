
import { Accordion,AccordionButton,AccordionIcon ,AccordionItem,Box,AccordionPanel} from '@chakra-ui/react'
import React from 'react'

const AccordianContent = () => {
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple bg='rgb(240,242,245)'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'fontSize="17px" fontWeight="bold">
          Customer Support
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Contact Us
    </AccordionPanel>
    <AccordionPanel pb={4} >
      Help centre
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Returns & Exchanges
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Best Buy Financing
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Best Buy Gift Card
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'fontSize="17px" fontWeight="bold">
          Account
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Contact Us
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Order Status
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Manage Account
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Email Preferences
    </AccordionPanel>
 
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize="17px" fontWeight="bold">
         Services
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Contact Us
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Geek Squad

    </AccordionPanel>
    <AccordionPanel pb={4} >
    In-Home Advisor

    </AccordionPanel>
    <AccordionPanel pb={4} >
    Trade-In Program
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Electronics Recycling

    </AccordionPanel>
    <AccordionPanel pb={4} >
    Best Buy Health
    </AccordionPanel>
 
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize="17px" fontWeight="bold">
         About us
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Contact Us
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Careers

    </AccordionPanel>
    <AccordionPanel pb={4} >
    Corporate Information

    </AccordionPanel>
    <AccordionPanel pb={4} >
    About Best Buy Marketplace
    </AccordionPanel>
    <AccordionPanel pb={4} >
    Sell on Best Buy Marketplace

    </AccordionPanel>
    <AccordionPanel pb={4} >
    Best Buy Affiliate Program
    </AccordionPanel>
 
    <AccordionPanel pb={4} >
    Advertise with Best Buy
    </AccordionPanel>
 
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize="17px" fontWeight="bold">
       International
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      Best Buy US
    </AccordionPanel>
   
 
  </AccordionItem>

</Accordion>
    </div>
  )
}

export default AccordianContent
