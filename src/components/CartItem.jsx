import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

import { notify } from "../utils/toaster";
import formatPrice from "../utils/priceFormatter";

/**
 * Displays a single cart item with:
 * - Product information
 * - Quantity controls
 * - Remove item functionality
 */
function CartItem({ product }) {
  const dispatch = useDispatch();

  /**
   * Increase product quantity in cart
   */
  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
    notify.added();
  };

  /**
   * Decrease product quantity in cart
   */
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
    notify.decreased();
  };

  /**
   * Remove product completely from cart
   */
  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    notify.removed();
  };

  return (
    <div
      className="
        card
        flex
        flex-col
        sm:flex-row
        gap-5
        items-start
        sm:items-center
      "
    >
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="
          h-28
          w-28
          rounded-2xl
          object-cover
          shrink-0
        "
      />

      {/* Product Information */}
      <div className="flex-1">
        <h3
          className="
            text-lg
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {product.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-[var(--text-secondary)]
          "
        >
          {product.category}
        </p>

        <p
          className="
            mt-3
            text-xl
            font-bold
            text-[var(--primary)]
          "
        >
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Cart Actions */}
      <div
        className="
          flex
          flex-col
          gap-4
          w-full
          sm:w-auto
        "
      >
        {/* Quantity Controls */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <button
            type="button"
            aria-label={`Decrease quantity of ${product.title}`}
            onClick={handleDecrease}
            className="
              h-10
              w-10
              rounded-xl
              glass
              text-lg
              font-bold
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            −
          </button>

          <span
            className="
              min-w-8
              text-center
              font-semibold
            "
          >
            {product.quantity}
          </span>

          <button
            type="button"
            aria-label={`Increase quantity of ${product.title}`}
            onClick={handleIncrease}
            className="
              h-10
              w-10
              rounded-xl
              glass
              text-lg
              font-bold
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            +
          </button>
        </div>

        {/* Remove Product */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${product.title} from cart`}
          className="
            rounded-xl
            px-4
            py-2
            text-sm
            font-medium
            bg-white/5
            border
            border-[var(--border-color)]
            text-[var(--text-secondary)]
            hover:text-red-400
            hover:border-red-500/40
            transition-all
            duration-300
          "
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;