import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
      <Link to="/" className="font-bold text-lg">🛒 E-Commerce</Link>
      <div className="flex items-center gap-4">
        <Link to="/cart">Panier ({items.length})</Link>
        {user ? (
          <>
            {user.role === "ADMIN" && <Link to="/admin">Admin</Link>}
            <span>Bonjour, {user.name}</span>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
}
