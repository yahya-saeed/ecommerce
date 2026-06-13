import { useMemo, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import { categories } from "../data/categories";

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("");

  // compute filtered products cleanly
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // search filter
    if (search.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, selectedCategory, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          className="border dark:border-slate-700 rounded-xl p-3 flex-1 dark:bg-slate-900"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY */}
        <select
          className="border rounded-xl p-3 dark:bg-slate-900"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>

          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* SORT */}
        <select
          className="border rounded-xl p-3 dark:bg-slate-900"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid lg:grid-cols-4 gap-10">
        {/* SIDEBAR FILTER */}
        <aside className="space-y-3">
          <h2 className="text-xl font-bold mb-4">Categories</h2>

          <button
            onClick={() => setSelectedCategory("All")}
            className={`block text-left w-full ${
              selectedCategory === "All" ? "font-bold text-indigo-600" : ""
            }`}
          >
            All
          </button>

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.name)}
              className={`block text-left w-full hover:text-indigo-600 ${
                selectedCategory === c.name ? "font-bold text-indigo-600" : ""
              }`}
            >
              {c.name}
            </button>
          ))}
        </aside>

        {/* PRODUCTS GRID */}
        <section className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
