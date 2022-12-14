import React from 'react'
import Add2 from "../Adds/add2"
import Grid1 from "../Grids/Grid"
import Add1 from "../Adds/adds"
import Navbar2 from "../Components/Navbar2";
import BannerAdd1 from "../Corousels/BannerAdd1";
import Navbar from "../Components/Navbar"
import Add3 from "../Adds/add3"
import Grid2 from "../Grids/Grid2"
import Grid3 from "../Grids/Grid3"
import Grid4 from "../Grids/Grid4"
import Grid5 from "../Grids/Grid5"
import TextContent from '../Contents/TextContent';
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
        <Add1 />
      <Navbar />
      <Navbar2 />
      <Add2 />
      <BannerAdd1 />
      <Grid1 />
      <Add3 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
      <TextContent />
      <Footer />
    </div>
  )
}

export default Home
