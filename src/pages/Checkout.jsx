import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../redux/cartSlice";
import NoProductsFound from "../components/NoProductFound";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [processing , setProcessing] = useState(false);

  const cartItems = useSelector(
    (store) => store.cart.items
  );

  if(cartItems.length === 0){
    setTimeout(()=>{
        navigate("/")
    },3000)
    return <NoProductsFound message="There is no item in Cart. Please items to Cart"/>
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 99;

  const total = subtotal + shipping;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    toast.success("🎉 Order placed successfully!");

    
    setTimeout(() => {
        navigate("/");
        dispatch(clearCart());
    }, 5000);
  }

  return (
    <section className="space-y-8">
      {/* Heading */}
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
        {/* Form */}
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

          <div className="space-y-4">
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
                  {item.title} × {item.quantity}
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

            <hr className="border-[var(--border-color)]" />

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

            <hr className="border-[var(--border-color)]" />

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
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;