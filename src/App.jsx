// En tu archivo App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Pages/Home";
import Prueba from "./Pages/Prueba";
import Footer from "./Components/Layout/Footer";
import Register from "./Components/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prueba" element={<Prueba />} />
            <Route path="/Register" element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;