import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header";
import Footers from "./components/Footer/Footer";
import ProtectDashboard from "./components/ProtectDashboard/ProtectDashboard";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route element={<ProtectDashboard />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
