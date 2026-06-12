import { useDispatch } from "react-redux";
import { increaseQuantity , decreaseQuantity , removeFromCart} from "../redux/cartSlice";
import { toast } from "react-toastify";
import { notify } from "../utils/toaster";

function CartItem({product}) {

    const dispatch = useDispatch();

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
      {/* Image */}
      <img
        src={product.thumbnail}
        alt="Product"
        loading="lazy"
        className="
          h-28
          w-28
          rounded-2xl
          object-cover
          shrink-0
        "
      />

      {/* Details */}
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
          {product.price}
        </p>
      </div>

      {/* Actions */}
      <div
        className="
          flex
          flex-col
          gap-4
          w-full
          sm:w-auto
        "
      >
        {/* Quantity */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <button
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

            onClick={()=>{ dispatch(decreaseQuantity(product.id)) ; notify.decreased()}}
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
           {product?.quantity}
          </span>

          <button
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
            onClick={()=>{dispatch(increaseQuantity(product.id)) ; notify.added()}}
          >
            +
          </button>
        </div>

        {/* Remove */}
        <button
          className="
            text-sm
            font-medium
            text-red-400
            hover:underline
          "
          onClick={()=>{dispatch(removeFromCart(product.id)); notify.removed();}}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;