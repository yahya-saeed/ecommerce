import { X, Search } from "lucide-react";

export default function MobileSearch({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 p-6">
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl">
        <div className="flex justify-between">
          <h2 className="font-bold">Search</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 border p-3 rounded-xl">
          <Search size={18} />
          <input
            placeholder="Search products..."
            className="w-full outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
