import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card p-4 w-64">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded-xl w-full h-40 object-cover"
      />
      <h2 className="mt-3 font-bold text-lg">{product.title}</h2>
      <p className="text-sm text-slate-400 line-clamp-2">{product.description}</p>
      <p className="mt-2 font-semibold text-emerald-400">${product.price}</p>
    </div>
  );
}
