import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
// import { increaseQuantity , decreaseQuantity , removeFromCart } from "../redux/cartSlice";

function Cart() {

    const cartList  = useSelector((store)=>store.cart.items);

  return (
    <section className="space-y-8">
      {/* Page Title */}
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

      {/* Cart Layout */}
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[2fr_1fr]
        "
      >
        {/* Items */}
        <div className="
    space-y-5
    max-h-[70vh]
    overflow-y-auto
    scroll-smooth
    scrollbar-hide
  "
        >
          {
            cartList?.map((item)=> <CartItem key={item.id} product={item} />)
          }
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

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹2997</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹150</span>
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
              <span className="text-[var(--primary)]">₹3147</span>
            </div>

            <button
              className="
                btn-primary
                w-full
                mt-4
              "
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
