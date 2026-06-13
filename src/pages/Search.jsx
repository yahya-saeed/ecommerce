import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

export default function Search() {
  const [query, setQuery] = useState("");

  const results = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full p-4 border rounded-xl dark:bg-slate-900"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
