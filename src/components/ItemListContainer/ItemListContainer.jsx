import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    return (
    <main className="container">
        <section className="hero">
            <h1>{greeting}</h1>
            <p>Acá próximamente va a ir el catálogo de productos.</p>
        </section>
    </main>
    );
};

export default ItemListContainer;
