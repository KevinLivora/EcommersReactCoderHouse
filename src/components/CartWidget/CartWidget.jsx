import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart">
            <span className="cart__icon">🛒</span>
            <span className="cart__badge">3</span>
        </div>
    );
};

export default CartWidget;
