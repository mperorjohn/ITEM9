// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Text, Stack } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";

const App = () => {
  return (
    <Stack
      bgImage={"url('src/assets/bgOriginal.png')"}
      height={"100vh"}
      width={"100vw"}
      bgSize={"cover"}
      position={"relative"}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Stack>
  );
};

export default App;
