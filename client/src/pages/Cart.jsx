import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../api/axios.js";

export default function Cart() {
  const { items, removeFromCart, total, clearCart } = useCart();
  const { user } = useAuth();

  async function handleCheckout() {
    if (!user) return alert("Connectez-vous avant de payer.");
    const { data } = await api.post("/payments/checkout", {
      items: items.map((i) => ({ name: i.name, price: i.price, quantity: i.quantity })),
    });
    window.location.href = data.url;
  }

  if (!items.length) return <p>Votre panier est vide.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name} × {item.quantity}</span>
          <div className="flex gap-4">
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">
              Retirer
            </button>
          </div>
        </div>
      ))}
      <p className="font-bold text-xl mt-4">Total: ${total.toFixed(2)}</p>
      <div className="flex gap-3 mt-4">
        <button onClick={handleCheckout} className="bg-green-600 text-white px-4 py-2 rounded">
          Payer avec Stripe
        </button>
        <button onClick={clearCart} className="bg-gray-300 px-4 py-2 rounded">
          Vider le panier
        </button>
      </div>
    </div>
  );
}
