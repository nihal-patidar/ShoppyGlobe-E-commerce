import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className="
        min-h-[75vh]
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          card
          max-w-xl
          w-full
          text-center
          space-y-6
        "
      >
        {/* Error Code */}
        <h1
          className="
            text-7xl
            md:text-9xl
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
          404
        </h1>

        {/* Heading */}
        <h2
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-[var(--text-primary)]
          "
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="
            text-sm
            md:text-base
            text-[var(--text-secondary)]
            max-w-md
            mx-auto
          "
        >
          The page you're looking for doesn't exist or may have
          been moved. Let's get you back to shopping.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            px-6
            py-3
            rounded-2xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-[var(--primary)]
            to-[var(--secondary)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;