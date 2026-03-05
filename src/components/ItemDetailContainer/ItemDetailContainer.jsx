import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/firestoreService";

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        getProductById(itemId)
        .then((data) => {
            setItem(data);
        })
        .finally(() => {
            setLoading(false);
        });

    }, [itemId]);

    if (loading) return <p>Cargando producto...</p>;

    if (!item) return <p>Producto no encontrado</p>;

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;