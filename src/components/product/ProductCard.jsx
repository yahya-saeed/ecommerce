import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToCart, wishlist, toggleWishlist } = useCartStore();

  const image = Object.values(product.images)[0];

  const isLiked = wishlist.some((item) => item.id === product.id);

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        {/* BADGE */}
        <span
          className="
          absolute top-3 left-3
          bg-green-500 text-white
          text-xs px-3 py-1 rounded-full
          z-10
        "
        >
          New
        </span>

        {/* WISHLIST BUTTON */}
        <button
          onClick={() => {
            toggleWishlist(product);

            toast.success(
              isLiked ? "Removed from wishlist" : "Added to wishlist",
            );
          }}
          className={`
            absolute top-3 right-3 z-10
            p-2 rounded-full
            transition
            hover:scale-110

            ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white dark:bg-slate-800 text-black dark:text-white"
            }
          `}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>

        {/* IMAGE */}
        <img
          src={image}
          alt={product.title}
          className="
            h-72 w-full object-cover
            group-hover:scale-110
            transition duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="font-bold text-lg">{product.title}</h3>

        {/* CATEGORY */}
        <p className="text-sm text-slate-500">{product.category}</p>

        {/* PRICE + RATING */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-black">${product.price}</span>

          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-5">
          {/* ADD TO CART */}
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart!");
            }}
            className="
              flex-1
              bg-indigo-600
              text-white
              py-2
              rounded-xl
              hover:bg-indigo-700
              transition
            "
          >
            Add
          </button>

          {/* VIEW PRODUCT */}
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="
              flex-1
              border
              dark:border-slate-700
              py-2
              rounded-xl
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
            "
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
