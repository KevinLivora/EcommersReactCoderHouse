import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
    return (
        <section className="grid">
        {items.map((p) => (
            <Item key={p.id} item={p} />
        ))}
        </section>
    );
};

export default ItemList;