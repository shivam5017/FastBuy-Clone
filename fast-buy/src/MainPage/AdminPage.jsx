import './Admin.css';
import MainDash from '../Component/MainDash/MainDash';
import RightSide from '../Component/RightSide/RightSide';
import Sidebar from '../Component/Sidebar/Sidebar';

import Cart from "../MainPage/Cart"
function Admin() {
  
   
  
  return (
    <div className="Admin">
      <div className="AdminGlass">
        <Sidebar/>
        <MainDash/>
        
        <RightSide/>
      </div>
    </div>
  );
}

export default Admin;