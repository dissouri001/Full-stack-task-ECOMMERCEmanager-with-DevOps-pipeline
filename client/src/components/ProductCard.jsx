import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 shadow-sm">
      <Link to={`/products/${product.id}`}>
        <h3 className="font-semibold text-lg">{product.name}</h3>
      </Link>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-slate-900 text-white px-3 py-2 rounded hover:bg-slate-700"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
