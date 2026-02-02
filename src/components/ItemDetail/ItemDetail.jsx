import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    const handleAdd = (qty) => {
        alert(`Agregaste ${qty} unidad(es) de "${item.title}"`);
    };

    return (
        <section className="detail">
        <img className="detail__img" src={item.image} alt={item.title} />

        <div className="detail__info">
            <h1>{item.title}</h1>
            <p className="detail__desc">{item.description}</p>
            <p className="detail__price">$ {item.price}</p>
            <p className="detail__stock">Stock: {item.stock}</p>

            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        </div>
        </section>
    );
};

export default ItemDetail;