import { products } from "../data/products";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (categoryId) => {
    await delay(800);

    if (!categoryId) return products;

    return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (itemId) => {
    await delay(800);

    return products.find((p) => p.id === itemId);
};