import { Link } from "react-router-dom";

function NoProductsFound({
  message = "We couldn't find any products matching your search."
}) {
  return (
    <div
      className="
        card
        max-w-2xl
        mx-auto
        py-16
        px-6
        text-center
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-[var(--primary)]
          to-[var(--secondary)]
          text-4xl
          text-white
        "
      >
        🔍
      </div>

      {/* Heading */}
      <h2
        className="
          text-3xl
          font-bold
          text-[var(--text-primary)]
        "
      >
        No Products Found
      </h2>

      {/* Description */}
      <h2
        className="
          mt-4
          text-[var(--text-primary)]
          max-w-md
          mx-auto
          font-bold

        "
      >
        {message}
      </h2>

      {/* Actions */}
      <div
        className="
          mt-8
          flex
          justify-center
        "
      >
        
      </div>
    </div>
  );
}

export default NoProductsFound;