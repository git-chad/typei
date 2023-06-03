import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import UserDashboard from "./pages/UserDashboard";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="bullshit w-full min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/Home" element={<Homepage/>}/>
          <Route path="/Dashboard" element={<UserDashboard/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Premium" element={<Premium/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
