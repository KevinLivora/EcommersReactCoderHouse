import { useContext, useMemo, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firestoreService";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const safeCart = useMemo(() => (Array.isArray(cart) ? cart : []), [cart]);

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!buyer.name.trim()) newErrors.name = "Ingresá tu nombre";
        if (!buyer.phone.trim()) newErrors.phone = "Ingresá tu teléfono";
        if (!buyer.email.trim()) newErrors.email = "Ingresá tu email";
        if (buyer.email !== buyer.emailConfirm) newErrors.emailConfirm = "Los emails no coinciden";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (safeCart.length === 0) return;
        if (!validate()) return;

        setSubmitting(true);
        try {
        const order = {
            buyer: {
            name: buyer.name,
            phone: buyer.phone,
            email: buyer.email,
            },
            items: safeCart.map((p) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            quantity: p.quantity,
            })),
            total: getTotalPrice(),
            createdAt: new Date(),
        };

        const id = await createOrder(order);
        setOrderId(id);
        clearCart();
        } catch (err) {
        console.error("Error creando la orden:", err);
        alert("Error al generar la orden. Revisá la consola.");
        } finally {
        setSubmitting(false);
        }
    };

    if (orderId) {
        return (
        <main className="container">
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu ID de orden es:</p>
            <strong>{orderId}</strong>
            <div style={{ marginTop: 16 }}>
            <Link to="/">Volver al catálogo</Link>
            </div>
        </main>
        );
    }

    if (safeCart.length === 0) {
        return (
        <main className="container">
            <h2>Checkout</h2>
            <p>Tu carrito está vacío.</p>
            <Link to="/">Volver al catálogo</Link>
        </main>
        );
    }

    return (
        <main className="container">
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
            <div style={{ marginBottom: 12 }}>
            <label>Nombre</label>
            <input name="name" value={buyer.name} onChange={handleChange} style={{ width: "100%" }} />
            {errors.name && <small style={{ color: "tomato" }}>{errors.name}</small>}
            </div>

            <div style={{ marginBottom: 12 }}>
            <label>Teléfono</label>
            <input name="phone" value={buyer.phone} onChange={handleChange} style={{ width: "100%" }} />
            {errors.phone && <small style={{ color: "tomato" }}>{errors.phone}</small>}
            </div>

            <div style={{ marginBottom: 12 }}>
            <label>Email</label>
            <input name="email" value={buyer.email} onChange={handleChange} style={{ width: "100%" }} />
            {errors.email && <small style={{ color: "tomato" }}>{errors.email}</small>}
            </div>

            <div style={{ marginBottom: 12 }}>
            <label>Confirmar Email</label>
            <input
                name="emailConfirm"
                value={buyer.emailConfirm}
                onChange={handleChange}
                style={{ width: "100%" }}
            />
            {errors.emailConfirm && <small style={{ color: "tomato" }}>{errors.emailConfirm}</small>}
            </div>

            <button type="submit" disabled={submitting}>
            {submitting ? "Generando orden..." : "Confirmar compra"}
            </button>
        </form>
        </main>
    );
};

export default CheckoutForm;