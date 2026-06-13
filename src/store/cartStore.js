import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      cartOpen: false,

      // ✅ RECENT PRODUCTS (FIXED LOCATION)
      recent: [],

      openCart: () => set({ cartOpen: true }),
      closeCart: () => set({ cartOpen: false }),

      // CART
      addToCart: (product) => {
        const exists = get().cart.find((i) => i.id === product.id);

        if (exists) {
          set({
            cart: get().cart.map((i) =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, qty: 1 }],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          cart: get().cart.filter((i) => i.id !== id),
        }),

      increaseQty: (id) =>
        set({
          cart: get().cart.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }),

      decreaseQty: (id) =>
        set({
          cart: get().cart.map((i) =>
            i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i,
          ),
        }),

      clearCart: () => set({ cart: [] }),

      // WISHLIST
      toggleWishlist: (product) => {
        const exists = get().wishlist.find((i) => i.id === product.id);

        if (exists) {
          set({
            wishlist: get().wishlist.filter((i) => i.id !== product.id),
          });
        } else {
          set({
            wishlist: [...get().wishlist, product],
          });
        }
      },

      moveToCart: (product) => {
        get().addToCart(product);
        get().toggleWishlist(product);
      },

      // ✅ RECENT FUNCTION (NOW INSIDE STORE)
      addRecent: (product) =>
        set((state) => ({
          recent: [
            product,
            ...state.recent.filter((p) => p.id !== product.id),
          ].slice(0, 6),
        })),
    }),
    {
      name: "shop-storage",
    },
  ),
);
