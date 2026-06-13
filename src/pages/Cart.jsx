import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import formatPrice from "../utils/priceFormatter";

const SHIPPING_COST = 99;

/**
 * Formats numbers as Indian Rupee currency.
 *
 * Example:
 * 1000 => ₹1,000
 */


function Cart() {
  // Get cart items from Redux store
  const cartList = useSelector(
    (store) => store.cart.items
  );

  // Return empty cart screen when no items exist
  if (!cartList.length) {
    return <EmptyCart />;
  }

  /**
   * Calculate subtotal by summing:
   * product price × quantity
   */
  const subtotal = cartList.reduce(
    (sum, item) =>
      sum +
      (item.price || 0) *
        (item.quantity || 0),
    0
  );

  // Apply shipping only when cart contains items
  const shipping = SHIPPING_COST;

  // Final payable amount
  const total = subtotal + shipping;

  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1
          className="
            text-3xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-[var(--primary)]
            via-[var(--secondary)]
            to-[var(--accent)]
            bg-clip-text
            text-transparent
          "
        >
          Shopping Cart
        </h1>

        <p
          className="
            mt-2
            text-[var(--text-secondary)]
          "
        >
          Review your selected products.
        </p>
      </div>

      {/* Main Layout */}
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[2fr_1fr]
        "
      >
        {/* Cart Items List */}
        <div
          className="
            space-y-5
            max-h-[70vh]
            overflow-y-auto
            scroll-smooth
            scrollbar-hide
            pr-1
          "
        >
          {cartList.map((item) => (
            <CartItem
              key={item.id}
              product={item}
            />
          ))}
        </div>

        {/* Order Summary */}
        <aside
          className="
            card
            h-fit
            sticky
            top-24
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Order Summary
          </h2>

          {/* Purchased Items */}
          <div className="space-y-3">
            {cartList.map((item) => (
              <div
                key={item.id}
                className="
                  flex
                  justify-between
                  text-sm
                "
              >
                <span
                  className="
                    truncate
                    max-w-[180px]
                  "
                >
                  {item.title} ×{" "}
                  {item.quantity}
                </span>

                <span>
                  {formatPrice(
                    item.price *
                      item.quantity
                  )}
                </span>
              </div>
            ))}
          </div>

          <hr
            className="
              my-5
              border-[var(--border-color)]
            "
          />

          {/* Price Breakdown */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>

              <span>
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              <span>
                {formatPrice(shipping)}
              </span>
            </div>
          </div>

          <hr
            className="
              my-5
              border-[var(--border-color)]
            "
          />

          {/* Grand Total */}
          <div
            className="
              flex
              justify-between
              text-xl
              font-bold
            "
          >
            <span>Total</span>

            <span
              className="
                text-[var(--primary)]
              "
            >
              {formatPrice(total)}
            </span>
          </div>

          {/* Checkout Button */}
          <Link
            to="/checkout"
            aria-label="Proceed to checkout"
            className="
              btn-primary
              w-full
              mt-6
              flex
              justify-center
            "
          >
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;