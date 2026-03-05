import { db } from "../firebase/firebaseConfig";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

// Productos
export const getProducts = async () => {
    const colRef = collection(db, "items");
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategory = async (categoryId) => {
    const colRef = collection(db, "items");
    const q = query(colRef, where("category", "==", categoryId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (id) => {
    const docRef = doc(db, "items", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() };
};

// Órdenes
export const createOrder = async (order) => {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);
    return docRef.id;
};