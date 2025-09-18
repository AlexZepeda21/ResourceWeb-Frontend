// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

export default function ProtectedRoute() {
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

  // Si no hay token, redirigir al login o a /
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Si existe el token, renderizar la ruta protegida
 return (
    <>
      <Header />
      <div className="pb-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
