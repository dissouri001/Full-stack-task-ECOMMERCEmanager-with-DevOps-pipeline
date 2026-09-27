import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition">
      <img
        src={product.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 flex-1">{product.description}</p>
        <p className="font-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-slate-900 text-white px-3 py-2 rounded hover:bg-slate-700"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
