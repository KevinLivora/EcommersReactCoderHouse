import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
        .then((data) => setItem(data))
        .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <main className="container"><p>Cargando detalle...</p></main>;
    if (!item) return <main className="container"><p>Producto no encontrado.</p></main>;

    return (
        <main className="container">
        <ItemDetail item={item} />
        </main>
    );
};

export default ItemDetailContainer;