import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-black text-green-500">Order Placed 🎉</h1>

        <p className="mt-4 text-slate-500">Thank you for shopping with us</p>

        <Link
          to="/"
          className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
