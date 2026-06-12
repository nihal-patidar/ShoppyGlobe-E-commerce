import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
// Remove Suspense since we don't need it for standard image loading

function ProductItem(props) {
  // Extract the image URL safely.
  // Add a fallback placeholder image just in case the array is empty.

  const dispatch = useDispatch();

  const imageUrl =
    props.product?.images?.[0] || "https://via.placeholder.com/150";

  function handleAddToCart() {
    dispatch(addToCart({...props.product, quantity : 1}));
  }

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
      <Link to={`product/${props.product.id}`}>
        {/* Image Container */}
        <div
          className="
          relative
          overflow-hidden
          rounded-2xl
          bg-white/5
        "
        >
          {/* Simply use standard standard img tag with loading="lazy" */}
          <img
            src={imageUrl}
            alt={props.product?.title || "Product"}
            loading="lazy" /* Native browser lazy loading */
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
            ⭐ {props.product?.rating || "4.8"}
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
            {props.product?.title || "Premium Product Name"}
          </h3>

          <p
            className="
            mt-2
            text-sm
            text-[var(--text-secondary)]
            line-clamp-2
          "
          >
            {props.product?.description ||
              "Short product description shown here."}
          </p>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <span
          className="
            text-2xl
            font-bold
              text-[var(--primary)]
            "
        >
          ₹{(props.product?.price * 85).toFixed(0)}
        </span>

        <button
          className="
            btn-primary
            text-sm
            px-4
            py-2
            "
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
