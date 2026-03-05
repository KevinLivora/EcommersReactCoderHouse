import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={decrease} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count >= stock}>+</button>

        <button onClick={() => onAdd(count)} disabled={stock <= 0}>
            Agregar al carrito
        </button>
        </div>
    );
};

export default ItemCount;