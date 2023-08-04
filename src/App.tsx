import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Store from "@/pages/Store/Store";
import About from "@/pages/About/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
