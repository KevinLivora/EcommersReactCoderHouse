const CartItem = ({ item, onRemove }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: 12, borderBottom: "1px solid #333" }}>
        <div>
            <h4 style={{ margin: 0 }}>{item.title}</h4>
            <small>Cantidad: {item.quantity}</small>
        </div>

        <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0 }}>$ {item.price * item.quantity}</p>
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
        </div>
    );
};

export default CartItem;