import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "../ui/ThemeToggle";
import { useCartStore } from "../../store/cartStore";
import { products } from "../../data/products";

export default function Navbar() {
  const { cart, openCart } = useCartStore();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  // FILTER PRODUCTS FOR SEARCH
  const results =
    query.length > 0
      ? products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  const handleSelect = (id) => {
    setQuery("");
    setShowResults(false);
    navigate(`/product/${id}`);
  };

  return (
    <header
      className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-white/70 dark:bg-slate-900/70
      border-b border-slate-200 dark:border-slate-800 dark:text-white
    "
    >
      <nav
        className="
        max-w-7xl mx-auto px-6 h-20
        flex items-center justify-between
      "
      >
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black">
          ShopZone
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:text-indigo-600" to="/">
            Home
          </Link>
          <Link className="hover:text-indigo-600" to="/products">
            Products
          </Link>
        </div>

        {/* SEARCH */}
        <div className="relative w-[300px] hidden md:block">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border dark:border-slate-700">
            <Search size={18} />

            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              placeholder="Search products..."
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* DROPDOWN RESULTS */}
          {showResults && query && (
            <div
              className="
              absolute top-12 left-0 right-0
              bg-white dark:bg-slate-900
              border dark:border-slate-700
              rounded-xl shadow-xl
              max-h-72 overflow-y-auto
              z-50
            "
            >
              {results.length > 0 ? (
                results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="
                      px-4 py-3 cursor-pointer
                      hover:bg-slate-100 dark:hover:bg-slate-800
                    "
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.category}</p>
                  </div>
                ))
              ) : (
                <p className="p-4 text-sm text-slate-500">No products found</p>
              )}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link to="/wishlist">
            <Heart className="hover:text-pink-500 transition" />
          </Link>

          <button onClick={openCart} className="relative">
            <ShoppingCart className="hover:text-indigo-600 transition" />

            <span
              className="
              absolute -top-2 -right-2
              text-xs bg-indigo-600 text-white
              w-5 h-5 rounded-full
              flex items-center justify-center
            "
            >
              {cart.length}
            </span>
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
