import { WeatherProvider } from "./context/WeatherContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProximosDias from "./pages/ProximosDIas/ProximosDias";

export default function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proximosDias" element={<ProximosDias />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  )
}