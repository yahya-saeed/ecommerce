import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-pink-600
        min-h-[600px]
        flex
        items-center
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            text-6xl
            font-black
            text-white
            max-w-3xl
            "
          >
            Discover Premium Products
          </motion.h1>

          <p
            className="
            text-xl
            text-white/90
            mt-6
            max-w-xl
            "
          >
            Shop the latest trends in electronics, fashion, gaming and more.
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            bg-white
            text-black
            rounded-2xl
            font-bold
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
