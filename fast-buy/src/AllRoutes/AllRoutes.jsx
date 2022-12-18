
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
import ProductEdit from "../Pages/ProductEdit";
import EditData from "../Pages/Editdata/EditData";
import ProductSelect from "../Pages/Product Selection/ProductSelect"
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
        <Route path="/Productedit" element={<ProductEdit />}></Route>
        {/* <Route path="/EditData" element={<EditData />}></Route> */}
        <Route path="/ProductSelect" element={<ProductSelect />}></Route>
        <Route path="/ProductSelect/EditData/:id" element={<EditData />}></Route>
        </Routes>
    
     
    </div>
  )
}

export default AllRoutes

