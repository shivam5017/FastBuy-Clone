import Add1 from '../Adds/adds'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import axios from 'axios'
import { Box, Flex, Heading, Link,Text, Image, Highlight, Button, Icon, Divider, Grid } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import Add2 from "../Adds/add2"
import Timer1 from "../Timer/Timer"
import { AiOutlineShoppingCart } from 'react-icons/ai'
// import Product from "../Product";
// import {Data} from "../Data/Data"
// import Footer from "../Footer";
import { StarIcon,TimeIcon } from "@chakra-ui/icons";
import TimerBox from '../Contents/TimerBox';
import DealsContainer from '../Contents/DealsContainer';
import BonusContainer from "../Contents/BonusContainer"
import Footer from "../Components/Footer"

const DealsOfDay = () => {




  return (
    <div>
        <Add1 />
        <Navbar />
      <Navbar2 />
      <Add2 />
     <TimerBox />
     <DealsContainer />
    <BonusContainer />

    <Footer />
    
    </div>
  )
}

export default DealsOfDay
