import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleOrder = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
      {/* LEFT - FORM */}
      <div>
        <h1 className="text-4xl font-black mb-6">Checkout</h1>

        <div className="space-y-4">
          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl dark:bg-slate-900"
          />

          <input
            placeholder="Email"
            className="w-full p-3 border rounded-xl dark:bg-slate-900"
          />

          <input
            placeholder="Address"
            className="w-full p-3 border rounded-xl dark:bg-slate-900"
          />
        </div>

        <button
          onClick={handleOrder}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl"
        >
          Place Order
        </button>
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-3">
            <span>
              {item.title} × {item.qty}
            </span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}
