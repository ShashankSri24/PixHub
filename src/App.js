import { ImgData } from "./ImgCard/ImgData";
import { Routes, Route } from "react-router";
import Login from "./LoginPage/login";
import SignUP from "./LoginPage/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ImgData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUP />} />
      </Routes>
    </>
  );
}

export default App;
