import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2
        className="
        text-4xl
        font-black
        mb-10
        "
      >
        Featured Products
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
