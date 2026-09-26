import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Email ou mot de passe incorrect");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Connexion</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded" required
      />
      <input
        type="password" placeholder="Mot de passe" value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded" required
      />
      <button className="bg-slate-900 text-white p-2 rounded">Se connecter</button>
    </form>
  );
}
