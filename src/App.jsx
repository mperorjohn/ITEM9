// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Stack } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";
import CartPage from "./pages/CartPage";
import { CartProvider } from "../src/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Stack
          bgImage={"url('src/assets/bgOriginal.png')"}
          height={"100vh"}
          width={"100vw"}
          bgSize={"cover"}
          position={"relative"}
          borderBottom="2px solid transparent"
        >
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login title="Login" />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Stack>
      </Router>
    </CartProvider>
  );
};

export default App;
