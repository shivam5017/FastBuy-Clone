import './Admin.css';
import {useState,useEffect} from "react"
import MainDash from '../Component/MainDash/MainDash';
import RightSide from '../Component/RightSide/RightSide';
import Sidebar from '../Component/Sidebar/Sidebar';
import { Spinner } from '@chakra-ui/react'
import Cart from "../MainPage/Cart"
function Admin() {
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
   
  
  return (
    <>
    {
      loading?(   <Spinner m="auto" justifyContent="center" mt="20%"/>):(
        <div className="Admin">
        <div className="AdminGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
      
    </div>
      )
    }
 
  </>
  );
}

export default Admin;