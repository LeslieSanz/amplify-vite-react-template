import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
  const navigate = useNavigate();

return (
    <div className="welcome-container">
    <h1>¡Bienvenido a la App!</h1>
    <p>Por favor, inicia sesión para continuar.</p>
    <button onClick={() => navigate("/login")}>Iniciar sesión</button>
    <button onClick={() => navigate("/invitado")}>Ingresar como invitado</button>
    </div>
);
};

export default Bienvenida;
