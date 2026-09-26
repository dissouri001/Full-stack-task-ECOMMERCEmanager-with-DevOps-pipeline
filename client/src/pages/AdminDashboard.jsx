import React, { useEffect, useState } from "react";
import api from "../api/axios.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", stock: "" });

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  if (!user || user.role !== "ADMIN") return <p>Accès réservé aux administrateurs.</p>;

  async function handleCreate(e) {
    e.preventDefault();
    const { data } = await api.post("/products", form);
    setProducts([data, ...products]);
    setForm({ name: "", description: "", price: "", stock: "" });
  }

  async function handleDelete(id) {
    await api.delete(`/products/${id}`);
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <form onSubmit={handleCreate} className="flex flex-col gap-2 max-w-sm mb-8">
        <input placeholder="Nom" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded" required />
        <input placeholder="Description" value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded" />
        <input placeholder="Prix" type="number" value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded" required />
        <input placeholder="Stock" type="number" value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="border p-2 rounded" />
        <button className="bg-slate-900 text-white p-2 rounded">Ajouter produit</button>
      </form>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Nom</th><th>Prix</th><th>Stock</th><th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.name}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleDelete(p.id)} className="text-red-500">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
