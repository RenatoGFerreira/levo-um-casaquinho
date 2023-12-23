import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from "./pages/Hoje/Hoje";
import ProximosDias from "./pages/ProximosDIas/ProximosDias";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hoje />} />
        <Route path="/proximosDias" element={<ProximosDias />} />
      </Routes>
    </BrowserRouter>
  )
}