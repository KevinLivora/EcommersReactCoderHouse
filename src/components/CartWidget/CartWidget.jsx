import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const total = getTotalQuantity();

    return (
        <div className="cart-widget" style={{ position: "relative", cursor: "pointer" }}>
        <span role="img" aria-label="carrito">🛒</span>

    {total > 0 && (
        <span
        className="cart-badge"
            style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                fontSize: "12px",
                padding: "2px 6px",
                borderRadius: "999px",
                background: "red",
                color: "white",
                fontWeight: "bold",
                }}
            >
            {total}
            </span>
            )}
        </div>
    );
};

export default CartWidget;