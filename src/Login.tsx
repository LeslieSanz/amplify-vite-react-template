import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App";  

const Login = () => {
return (
    <Authenticator>
      {/* Redirigir a la app o mostrar directamente el contenido */}
    <App />
    </Authenticator>
);
};

export default Login;
