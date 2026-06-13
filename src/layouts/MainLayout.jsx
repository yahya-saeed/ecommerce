import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import CartDrawer from "../components/cart/CartDrawer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <CartDrawer />

      <main className="min-h-screen dark:bg-slate-950 dark:text-white">
        <Outlet />
      </main>
    </>
  );
}
