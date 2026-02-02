import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className="container">
        <h1>404</h1>
        <p>La ruta no existe.</p>
        <Link to="/">Volver al inicio</Link>
        </main>
    );
};

export default NotFound;