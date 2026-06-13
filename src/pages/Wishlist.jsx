import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, moveToCart } = useCartStore();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold">Wishlist is empty ❤️</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black mb-10">Wishlist</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow p-4"
          >
            <img
              src={Object.values(item.images)[0]}
              className="h-40 w-full object-cover rounded-xl"
            />

            <h2 className="font-bold mt-3">{item.title}</h2>

            <p className="text-slate-500">${item.price}</p>

            <button
              onClick={() => {
                moveToCart(item);
                navigate("/cart");
              }}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl"
            >
              Move to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
