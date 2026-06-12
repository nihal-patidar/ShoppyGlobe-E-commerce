import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <section
        className="
          flex
          flex-col
          gap-2
        "
      >
        <h1
          className="
            text-2xl
            md:text-4xl
            font-bold
            bg-gradient-to-r
            from-[var(--primary)]
            via-[var(--secondary)]
            to-[var(--accent)]
            bg-clip-text
            text-transparent
          "
        >
          Featured Products
        </h1>

        <p
          className="
            text-sm
            md:text-base
            text-[var(--text-secondary)]
          "
        >
          Explore our latest collection and discover products you'll love.
        </p>
      </section>

      {/* Products */}
      <ProductList />
    </div>
  );
}

export default Home;