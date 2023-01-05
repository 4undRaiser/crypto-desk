import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { CryptoDetail } from "./pages/CryptoDetail"
import { Home } from "./pages/Home"


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
