# Proyecto Final - E-commerce React (Coderhouse)

Single Page Application (SPA) de e-commerce desarrollada con **React + Vite**, con navegación mediante **React Router**, manejo de estado global del carrito con **Context API** e integración con **Firebase Firestore** para productos y órdenes de compra.

---

## Funcionalidades

- Catálogo de productos (listado dinámico desde Firestore)
- Filtrado por categorías desde el menú
- Vista de detalle del producto
- Contador `ItemCount` con validaciones (mínimo 1, máximo por stock) y ocultamiento luego de agregar al carrito
- Carrito con Context:
  - agregar productos
  - eliminar productos
  - vaciar carrito
  - totales y subtotales
  - badge con total de unidades en `CartWidget`
- Checkout:
  - formulario de compra
  - generación de orden en Firestore
  - visualización del **ID de orden** al finalizar
- Mensajes y renderizado condicional:
  - loading / “Cargando…”
  - carrito vacío
  - producto no encontrado / sin stock (según corresponda)
- Ruta `404` para páginas inexistentes

---

## Rutas principales

- `/` → catálogo principal
- `/category/:categoryId` → catálogo filtrado por categoría
- `/item/:itemId` → detalle del producto
- `/cart` → carrito
- `/checkout` → checkout / generación de orden
- `*` → 404 (NotFound)

---

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Firebase / Firestore
- CSS (estilos propios)

---

## Cómo ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   npm install

Levantar el servidor de desarrollo:

npm run dev

Abrir en el navegador la URL que muestra Vite (por defecto):

http://localhost:5173

Configuración de Firebase

La aplicación utiliza Firestore como base de datos:

Colección de productos: items

Colección de órdenes: orders

Las credenciales se configuran mediante variables de entorno (Vite):

VITE_FIREBASE_API_KEY

VITE_FIREBASE_AUTH_DOMAIN

VITE_FIREBASE_PROJECT_ID

VITE_FIREBASE_STORAGE_BUCKET

VITE_FIREBASE_MESSAGING_SENDER_ID

VITE_FIREBASE_APP_ID

Estructura de componentes (referencia)

App
└── NavBar
    └── CartWidget

ItemListContainer
└── ItemList
    └── Item

ItemDetailContainer
└── ItemDetail
    └── ItemCount

Cart
└── CartItem

CheckoutForm

Autor

Kevin Livora