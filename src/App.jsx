import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Premium from "./pages/Premium";
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/UserDashboard";
import {Route, Routes} from "react-router-dom";
import Account from "./pages/Account";


function App() {
  return (
    <div className="bullshit w-full min-h-screen">
      <div className="z-30"><Navbar /></div>
      <div>
        <Routes>
          
          <Route path="/" element={<Homepage />} index/>
          <Route path="/Dashboard" element={<UserDashboard/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/Premium" element={<Premium/>}/>
          <Route path="/Account" element={<Account/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
