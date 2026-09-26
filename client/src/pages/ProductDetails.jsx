import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios.js";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 my-2">{product.description}</p>
      <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-slate-900 text-white px-4 py-2 rounded"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
