import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Prueba from "./Pages/Prueba";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import ResetPass from "./Components/ResetPass/ResetPass";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ResetPass" element={<ResetPass/>}/>

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/Prueba" element={<Prueba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
