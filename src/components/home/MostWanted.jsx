import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

export default function MostWanted() {
  const wanted = products.filter((product) => product.wanted);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2
        className="
        text-4xl
        font-black
        mb-10
        "
      >
        Most Wanted
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >
        {wanted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
