// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Text, Stack } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import CheckOut from "./pages/CheckOut";

const App = () => {
  return (
      <Stack
        bgImage={"url('src/assets/bgOriginal.png')"}
        height={"100vh"}
        width={"100vw"}
        bgSize={"cover"}
        position={"relative"}
        borderBottom="2px solid transparent"
        // fontFamily={"'Montserrat', sans-serif"}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
      </Stack>
  );
};

export default App;
