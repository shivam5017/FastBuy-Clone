import Footer from "./Components/Footer"
import './App.css';
// import Home from "./MainPage/Home"
import AllRoutes from "./AllRoutes/AllRoutes";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

// import DealsOfDay from "./MainPage/DealsOfDay"
// import Stores from "./MainPage/Stores"
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <AllRoutes />
      </UserAuthContextProvider>
    
      {/* <Footer /> */}
      {/* <Home />
      <DealsOfDay />
      <Stores /> */}
    </div>
  );
}

export default App;