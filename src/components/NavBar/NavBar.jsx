import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className="nav">
        <div className="nav__inner">
            <Link to="/" className="nav__brand">
            <span className="nav__logo">🛍️</span>
            <span>Mi Tienda</span>
            </Link>

            <nav className="nav__links">
                <Link to="/category/remeras">Remeras</Link>
                <Link to="/category/zapatillas">Zapatillas</Link>
                <Link to="/category/accesorios">Accesorios</Link>
            </nav>

            <CartWidget />
        </div>
    </header>
    );
};

export default NavBar;
