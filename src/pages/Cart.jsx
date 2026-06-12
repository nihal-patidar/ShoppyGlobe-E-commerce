import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const cartList = useSelector(
    (store) => store.cart.items
  );

  const subtotal = cartList.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping =
    cartList.length > 0 ? 99 : 0;

  const total = subtotal + shipping;

  if (!cartList.length) {
    return <EmptyCart />;
  }

  return (
    <section className="space-y-8">
      {/* Header */}
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

      {/* Layout */}
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[2fr_1fr]
        "
      >
        {/* Cart Items */}
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

        {/* Summary */}
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

          {/* Items */}
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
                  ₹
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(0)}
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

          {/* Price Details */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>

              <span>
                ₹{subtotal.toFixed(0)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              <span>
                ₹{shipping.toFixed(0)}
              </span>
            </div>
          </div>

          <hr
            className="
              my-5
              border-[var(--border-color)]
            "
          />

          {/* Total */}
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
              ₹{total.toFixed(0)}
            </span>
          </div>

          {/* Checkout */}
          <Link
            to="/checkout"
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