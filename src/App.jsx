import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Premium from "./pages/Premium";
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/UserDashboard";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="bullshit w-full min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/Home" element={<Homepage />} index/>
          <Route path="/Dashboard" element={<UserDashboard/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/Premium" element={<Premium/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
