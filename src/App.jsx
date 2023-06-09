import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Premium from "./pages/Premium";
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/UserDashboard";
import {Route, Routes} from "react-router-dom";
import Account from "./pages/Account";
import AuthLogic from "./components/auth/AuthLogic";

function App() {
  return (
    <div className="bullshit w-full min-h-screen">
      
      <div>
        <Routes>
          <div className="z-30"><Navbar /></div>
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
