import { Routes, Route, Navigate } from "react-router-dom";
import Bienvenida from "./Bienvenida";
import Login from "./Login";
import Invitado from "./Invitado";
import App from "./App";

const AppRoutes = () => {
return (
    <Routes>
      {/* Ruta de bienvenida */}
    <Route path="/" element={<Bienvenida />} />
      {/* Ruta de login */}
    <Route path="/login" element={<Login />} />
      {/* Ruta de la app (puedes agregar protección si lo deseas) */}
    <Route path="/app" element={<App />} />
     {/* Ruta de la app INVITADO (puedes agregar protección si lo deseas) */}
    <Route path="/invitado" element={<Invitado />} />
      {/* Redirige cualquier ruta desconocida a la bienvenida */}
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);
};

export default AppRoutes;
