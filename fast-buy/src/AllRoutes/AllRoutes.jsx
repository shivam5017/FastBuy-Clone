
import {

  Routes,
  Route,
  useNavigate ,
} from "react-router-dom";
  
import React from 'react'
import Home from "../MainPage/Home"
import DealsOfDay from "../MainPage/DealsOfDay";
import Stores from "../MainPage/Stores"
const AllRoutes = () => {
  // const navigate=useNavigate();
  return (
    <div>
       
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/DealsOfDay' element={<DealsOfDay />}></Route>
        <Route path="/Stores" element={<Stores />}></Route>
        
        </Routes>
    
     
    </div>
  )
}

export default AllRoutes

