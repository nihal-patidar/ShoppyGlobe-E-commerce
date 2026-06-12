import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { notify } from "../utils/toaster";


function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage , setCurrentImage] = useState()

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to load product.");
        }

        const data = await res.json();

        setProduct(data);
        setCurrentImage(data.thumbnail)
        
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Loader text="Loading product details..." />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message={
          error.message ||
          "Failed to load product."
        }
      />
    );
  }


  function handleAddToCart() {
      if(!product) return ;
      dispatch(addToCart({...product, quantity : 1}));
      notify.added();
    }

  return (
    <section className="space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
          btn-secondary
          inline-flex
          items-center
          gap-2
        "
      >
        ← Back
      </button>

      {/* Product Section */}
      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >
        {/* Left Side */}
        <div className="space-y-4">
          <div
            className="
              card
              overflow-hidden
            "
          >
            <img
              src={currentImage}
              alt={product.title}
              loading="lazy"
              decoding="async"
              className="
                w-full
                h-[320px]
                md:h-[500px]
                object-cover
                rounded-2xl
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* Gallery */}
          {product.images?.length > 0 && (
            <div
              className="
                grid
                grid-cols-4
                gap-3
              "
            >
              {product.images
                .slice(0, 4)
                .map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={product.title}
                    loading="lazy"
                    className="
                      h-20
                      w-full
                      object-cover
                      rounded-xl
                      border
                      border-[var(--border-color)]
                    "
                    onClick={()=>{setCurrentImage(image)}}
                  />
                ))}
            </div>
          )}
        </div>

        {/* Right Side */}
        <div
          className="
            card
            flex
            flex-col
            justify-center
          "
        >
          <div className="space-y-5">
            {/* Category + Discount */}
            <div className="flex flex-wrap gap-2">
              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                  bg-[var(--highlight)]
                  text-slate-900
                "
              >
                {product.category}
              </span>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  glass
                "
              >
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              {product.title}
            </h1>

            {/* Brand */}
            <p
              className="
                text-[var(--text-secondary)]
              "
            >
              Brand:
              <span className="font-medium ml-2">
                {product.brand}
              </span>
            </p>

            {/* Rating */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  glass
                "
              >
                ⭐ {product.rating}
              </span>

              <span
                className="
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                Stock: {product.stock}
              </span>
            </div>

            {/* Price */}
            <div
              className="
                flex
                items-end
                gap-3
              "
            >
              <span
                className="
                  text-4xl
                  font-bold
                  text-[var(--primary)]
                "
              >
                ₹{(product.price * 85).toFixed(0)}
              </span>

              <span
                className="
                  text-sm
                  text-[var(--accent)]
                "
              >
                Available Now
              </span>
            </div>

            {/* Description */}
            <p
              className="
                text-[var(--text-secondary)]
                leading-relaxed
              "
            >
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex gap-2">
                ✅ Premium Quality
              </div>

              <div className="flex gap-2">
                ✅ Fast Delivery
              </div>

              <div className="flex gap-2">
                ✅ Secure Payment
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                pt-4
              "
            >
              <button
                className="
                  btn-primary
                  flex-1
                "

                onClick={handleAddToCart}
              >
                Add To Cart
              </button>

              <button
                className="
                  btn-secondary
                  flex-1
                "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="card">
        <h2
          className="
            text-2xl
            font-bold
            mb-4
          "
        >
          Product Description
        </h2>

        <p
          className="
            text-[var(--text-secondary)]
            leading-relaxed
          "
        >
          {product.description}
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;