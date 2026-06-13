import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold">Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black mb-10">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow"
            >
              <img
                src={Object.values(item.images)[0]}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.title}</h2>

                <p className="text-slate-500">${item.price}</p>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 border py-3 rounded-xl"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
