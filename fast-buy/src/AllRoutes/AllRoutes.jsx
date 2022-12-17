
import {

  Routes,
  Route,
  useNavigate ,
} from "react-router-dom";
  import Account from "../MainPage/Account"
import React from 'react'
import Home from "../MainPage/Home"
import DealsOfDay from "../MainPage/DealsOfDay";
import Stores from "../MainPage/Stores"
import Cart from "../MainPage/Cart"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import AdminPage from "../MainPage/AdminPage";

const AllRoutes = () => {
  // const navigate=useNavigate();
  return (
    <div>
       
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/DealsOfDay' element={<DealsOfDay />}></Route>
        <Route path="/Stores" element={<Stores />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        </Routes>
    
     
    </div>
  )
}

export default AllRoutes

