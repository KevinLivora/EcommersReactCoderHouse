import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const handleAdd = (quantity) => {
        addItem(item, quantity);
        setAdded(true);
    };

    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p><strong>Precio:</strong> ${item.price}</p>
            <p><strong>Stock:</strong> {item.stock}</p>

        {!added ? (
            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
            ) : (
            <div style={{ marginTop: 12 }}>
            <p>✅ Agregado al carrito</p>
            <Link to="/cart">Ir al carrito</Link>
            </div>
            )}
            </div>
    );
};

export default ItemDetail;