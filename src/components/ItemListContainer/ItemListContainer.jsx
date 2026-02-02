import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productService";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getProducts(categoryId)
        .then((data) => setItems(data))
        .finally(() => setLoading(false));
    }, [categoryId]); // recomendación: param en dependencias

    return (
        <main className="container">
        <section className="hero">
            <h1>{greeting}</h1>
            {categoryId ? (
            <p>Mostrando categoría: <b>{categoryId}</b></p>
            ) : (
            <p>Catálogo principal</p>
            )}
        </section>

        {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
        </main>
    );
};

export default ItemListContainer;