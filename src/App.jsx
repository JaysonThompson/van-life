import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layouts from "./components/Layouts";

import "../server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
