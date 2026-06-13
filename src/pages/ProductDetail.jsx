import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

import { useCartStore } from "../store/cartStore";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const { addToCart, addRecent } = useCartStore();

  // ✅ NOW SAFE (product exists above)
  useEffect(() => {
    if (product) {
      addRecent(product);
    }
  }, [product, addRecent]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  const colors = Object.keys(product.images);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* PRODUCT SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={product.images[selectedColor]}
              alt={product.title}
              className="w-full h-[550px] object-cover"
            />
          </div>

          <div className="flex gap-3 mt-6">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-xl border capitalize transition ${
                  selectedColor === color
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white dark:bg-slate-900"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-indigo-600 font-medium">{product.category}</p>

          <h1 className="text-5xl font-black mt-2">{product.title}</h1>

          <div className="mt-4 text-yellow-500 text-lg">
            ⭐ {product.rating}
          </div>

          <div className="text-4xl font-bold mt-6">${product.price}</div>

          <p className="mt-8 text-slate-600 dark:text-slate-400 leading-8">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-10 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* RELATED */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-4xl font-black mb-10">Related Products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}

      {/* REVIEWS */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>

        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p>Excellent product quality!</p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl">
            ⭐⭐⭐⭐
            <p>Very comfortable and premium feel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
