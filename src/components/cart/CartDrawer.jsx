import { useCartStore } from "../../store/cartStore";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    closeCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCartStore();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          {/* BACKDROP */}
          <div onClick={closeCart} className="absolute inset-0 bg-black/40" />

          {/* PANEL */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              absolute right-0 top-0
              h-full w-[380px]
              bg-white dark:bg-slate-900
              shadow-xl flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex justify-between p-5 border-b dark:border-slate-800">
              <h2 className="text-xl font-bold">Cart</h2>
              <button onClick={closeCart}>
                <X />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <p className="text-slate-500">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 border dark:border-slate-800 rounded-xl"
                  >
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-sm text-slate-500">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 border rounded"
                      >
                        -
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="p-5 border-t dark:border-slate-800">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-xl">
                Checkout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
