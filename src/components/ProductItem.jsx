function ProductItem() {
  return (
    <article
      className="
        group
        card
        overflow-hidden
        flex
        flex-col
      "
    >
      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          bg-white/5
        "
      >
        <img
          src="https://placehold.co/600x400"
          alt="Product"
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Rating */}
        <span
          className="
            absolute
            top-3
            right-3
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            glass
          "
        >
          ⭐ 4.8
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-5">
        <h3
          className="
            text-lg
            font-semibold
            text-[var(--text-primary)]
            line-clamp-2
          "
        >
          Premium Product Name
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-[var(--text-secondary)]
            line-clamp-2
          "
        >
          Short product description shown here.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className="
              text-2xl
              font-bold
              text-[var(--primary)]
            "
          >
            ₹999
          </span>

          <button
            className="
              btn-primary
              text-sm
              px-4
              py-2
            "
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductItem;