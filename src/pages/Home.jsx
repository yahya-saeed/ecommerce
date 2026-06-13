import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import MostWanted from "../components/home/MostWanted";

export default function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <MostWanted />
    </>
  );
}
