import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
    getProducts,
    getProductsByCategory,
} from "../../services/firestoreService";

    const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
        try {
            const data = categoryId
            ? await getProductsByCategory(categoryId)
            : await getProducts();

            setItems(data);
        } catch (error) {
            console.error("Error trayendo productos:", error);
            setItems([]);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [categoryId]);

    if (loading) {
        return (
        <main className="container">
            <p>Cargando productos...</p>
        </main>
        );
    }

    if (items.length === 0) {
        return (
        <main className="container">
            {greeting && <h2>{greeting}</h2>}
            <p>No hay productos para mostrar.</p>
        </main>
        );
    }

    return (
        <main className="container">
        {greeting && <h2>{greeting}</h2>}
        <ItemList items={items} />
        </main>
    );
};

export default ItemListContainer;