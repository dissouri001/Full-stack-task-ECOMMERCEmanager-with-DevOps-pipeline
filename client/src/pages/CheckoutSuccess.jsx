import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-green-600">Paiement réussi ✅</h1>
      <p className="my-4">Merci pour votre commande !</p>
      <Link to="/" className="underline">Retour à l'accueil</Link>
    </div>
  );
}
