import { Route, Routes } from "react-router-dom";
// pages
import Home from "@/pages/Home/Home";
import Store from "@/pages/Store/Store";
import About from "@/pages/About/About";
// comp
import Navbar from "@/components/Header/Navbar";
// context
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
