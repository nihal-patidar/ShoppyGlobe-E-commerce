function ProductItem({ product }) {
  // Redux dispatch used for cart-related actions
  const dispatch = useDispatch();

  // Use the first available product image.
  // Fallback image prevents broken UI when API data is incomplete.
  const imageUrl =
    product?.images?.[0] || FALLBACK_IMAGE;

  // Add selected product to cart with an initial quantity.
  // Also trigger a toast notification for user feedback.
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );

    notify.added();
  };

  return (
    <article className="group card overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`}>
        {/* Product Image Section */}
        <div className="relative overflow-hidden rounded-2xl bg-white/5">
          <img
            src={imageUrl}
            alt={product.title}
            loading="lazy"
            className="
              h-56
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Product Rating Badge */}
          <span
            className="
              absolute
              top-3
              right-3
              glass
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
            "
          >
            ⭐ {product.rating}
          </span>
        </div>

        {/* Product Information */}
        <div className="flex flex-col flex-1 pt-5">
          {/* Product Title */}
          <h3
            className="
              text-lg
              font-semibold
              text-[var(--text-primary)]
              line-clamp-2
            "
          >
            {product.title}
          </h3>

          {/* Product Description */}
          <p
            className="
              mt-2
              text-sm
              text-[var(--text-secondary)]
              line-clamp-2
            "
          >
            {product.description}
          </p>
        </div>
      </Link>

      {/* Product Footer */}
      <div className="mt-4 flex items-center justify-between">
        {/* Product Price */}
        <span
          className="
            text-2xl
            font-bold
            text-[var(--primary)]
          "
        >
          ₹{product.price}
        </span>

        {/* Add To Cart Action */}
        <button
          onClick={handleAddToCart}
          className="
            btn-primary
            text-sm
            px-4
            py-2
          "
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
}