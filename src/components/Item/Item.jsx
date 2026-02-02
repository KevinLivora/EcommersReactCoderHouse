import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
    return (
        <article className="card">
        <img className="card__img" src={item.image} alt={item.title} />
        <h2 className="card__title">{item.title}</h2>
        <p className="card__price">$ {item.price}</p>

        <Link className="card__btn" to={`/item/${item.id}`}>
            Ver detalle
        </Link>
        </article>
    );
};

export default Item;