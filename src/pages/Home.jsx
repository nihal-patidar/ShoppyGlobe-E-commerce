import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section
        className="
          card
          text-center
          py-12
        "
      >
        <h1
          className="
            text-4xl
            md:text-6xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-[var(--primary)]
            via-[var(--secondary)]
            to-[var(--accent)]
            bg-clip-text
            text-transparent
          "
        >
          Discover Amazing Products
        </h1>

        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-[var(--text-secondary)]
          "
        >
          Shop smarter with modern products,
          premium quality, and unbeatable deals.
        </p>
      </section>

      {/* Product Section */}
      <section>
        <div className="mb-6">
          <h2
            className="
              text-2xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            Featured Products
          </h2>
        </div>

        {/* <ProductList /> */}
      </section>
    </div>
  );
}

export default Home;