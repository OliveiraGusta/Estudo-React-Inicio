import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import TitulosPage from "./pages/TitulosPage"

export default function App() {
  return (
    <div>
      <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contato" element={<Contato />}/>
            <Route path="/titulos" element={<TitulosPage />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

