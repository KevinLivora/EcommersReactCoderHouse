import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
        <main className="container">
            <h2>Carrito</h2>
            <p>Carrito vacío.</p>
            <Link to="/">Volver al catálogo</Link>
        </main>
        );
    }

    return (
        <main className="container">
        <h2>Carrito</h2>

        {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}

        <h3>Total: $ {getTotalPrice()}</h3>

        <div style={{ display: "flex", gap: 12 }}>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">Ir a checkout</Link>
        </div>
        </main>
    );
};

export default Cart;