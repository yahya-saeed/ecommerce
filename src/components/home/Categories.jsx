import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2
        className="
        text-4xl
        font-black
        mb-10
        "
      >
        Shop By Category
      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        "
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="
            group
            relative
            rounded-3xl
            overflow-hidden
            "
          >
            <img
              src={category.image}
              alt={category.name}
              className="
              h-72
              w-full
              object-cover
              group-hover:scale-110
              transition
              duration-500
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-black/40
              flex
              items-end
              p-6
              "
            >
              <h3
                className="
                text-white
                text-2xl
                font-bold
                "
              >
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
