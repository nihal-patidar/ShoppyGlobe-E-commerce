import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <section
      className="
        min-h-[70vh]
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          card
          max-w-xl
          w-full
          text-center
          py-12
          px-6
        "
      >
        {/* Icon */}
        <div
          className="
            text-7xl
            md:text-8xl
            mb-6
            animate-bounce
          "
        >
          🛒
        </div>

        {/* Title */}
        <h1
          className="
            text-3xl
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
          Your Cart Is Empty
        </h1>

        {/* Description */}
        <p
          className="
            mt-4
            text-[var(--text-secondary)]
            text-sm
            md:text-base
            max-w-md
            mx-auto
          "
        >
          Looks like you haven't added any products yet.
          Explore our collection and discover something amazing.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="
            btn-primary
            inline-flex
            items-center
            justify-center
            mt-8
            px-8
          "
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default EmptyCart;