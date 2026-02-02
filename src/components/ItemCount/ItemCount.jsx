import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrement = () => setCount((c) => Math.max(1, c - 1));
    const increment = () => setCount((c) => Math.min(stock, c + 1));

    return (
        <div className="count">
        <div className="count__controls">
            <button onClick={decrement} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count >= stock}>+</button>
        </div>

        <button className="count__add" onClick={() => onAdd(count)} disabled={stock === 0}>
            Agregar al carrito
        </button>
        </div>
    );
};

export default ItemCount;