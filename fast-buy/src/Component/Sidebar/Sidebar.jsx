import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../DataAdmin/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useUserAuth } from '../../Context/UserAuthContext'
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {UilPackage} from "@iconscout/react-unicons";
import MainDash from "../MainDash/MainDash";



const Sidebar = () => {
  const navigate=useNavigate();

  const [selected, setSelected] = useState(0);
  const {user,logout} =useUserAuth();
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  const handleProducts=()=>{
     
  }
  

  const handleLogout=async()=>{
    try{
         await logout();
         navigate("/");
    }catch(err){
      console.log(err.message)
    }
   }

  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Fas<span>t B</span>uy
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
        
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span onClick={handleProducts}>{item.heading}</span>
            </div>
          );
        })}
            <div  className="menuItem">
              <UilPackage />
              <span onClick={handleProducts} >Products</span>
            </div>

        {/* signoutIcon */}
      
        <div className="menuItem">
          <Button onClick={handleLogout}><UilSignOutAlt /></Button>
          
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
