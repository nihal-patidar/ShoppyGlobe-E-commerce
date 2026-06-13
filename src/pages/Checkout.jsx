import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { clearCart } from "../redux/cartSlice";

import OrderProcessing from "../components/OrderProcessing";
import EmptyCart from "../components/EmptyCart";

import formatPrice from "../utils/priceFormatter";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Controls checkout processing screen
  const [processing, setProcessing] = useState(false);

  // Retrieve cart items from Redux store
  const cartItems = useSelector(
    (store) => store.cart.items
  );

  // Customer information form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Show empty cart page if no products exist
  if (!cartItems.length) {
    return <EmptyCart />;
  }

  /**
   * Calculate subtotal:
   * Sum of (price × quantity) for all products.
   */
  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  /**
   * Shipping policy:
   * Free shipping for orders above ₹1000.
   */
  const shipping =
    subtotal > 1000 ? 0 : 99;

  // Final payable amount
  const total = subtotal + shipping;

  /**
   * Handles updates for all form fields.
   */
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /**
   * Simulates order processing.
   */
  function handleSubmit(e) {
    e.preventDefault();

    setProcessing(true);

    setTimeout(() => {
      dispatch(clearCart());

      toast.success(
        "Order placed successfully!"
      );

      navigate("/");
    }, 7000);
  }

  return (
    <>
      {processing ? (
        <OrderProcessing />
      ) : (
        <section className="space-y-8">
          {/* Page Header */}
          <div>
            <h1
              className="
                text-4xl
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
              Checkout
            </h1>

            <p
              className="
                mt-2
                text-[var(--text-secondary)]
              "
            >
              Complete your order details.
            </p>
          </div>

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[2fr_1fr]
            "
          >
            {/* Customer Information Form */}
            <form
              onSubmit={handleSubmit}
              className="
                card
                space-y-5
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Customer Information
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-modern"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-modern"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-modern"
              />

              <textarea
                name="address"
                rows="4"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="
                  input-modern
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  btn-primary
                  w-full
                "
              >
                Place Order
              </button>
            </form>

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

              <div className="space-y-4">
                {/* Ordered Products */}
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex
                      justify-between
                      text-sm
                    "
                  >
                    <span>
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

                <hr className="border-[var(--border-color)]" />

                {/* Pricing Details */}
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

                <hr className="border-[var(--border-color)]" />

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
              </div>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}

export default Checkout;