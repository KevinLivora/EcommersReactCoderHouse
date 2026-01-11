import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
    <header className="nav">
        <div className="nav__inner">
            <div className="nav__brand">
                <span className="nav__logo">🛍️</span>
                <span>Mi Tienda</span>
            </div>

            <nav className="nav__links">
                <a href="#remeras">Remeras</a>
                <a href="#zapatillas">Zapatillas</a>
                <a href="#accesorios">Accesorios</a>
            </nav>

            <CartWidget />
        </div>
    </header>
    );
};

export default NavBar;
