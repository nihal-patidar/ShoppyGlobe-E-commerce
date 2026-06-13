import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { notify } from "../utils/toaster";

function ProductDetail() {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Stores the image currently displayed in the main preview section
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    // Fetch product details whenever route parameter changes
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

        // Convert USD price into INR for display purposes
        const formattedProduct = {
          ...data,
          price: (data.price * 85).toFixed(0),
        };

        setProduct(formattedProduct);

        // Display thumbnail as default preview image
        setCurrentImage(data.thumbnail);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // Add current product to cart with initial quantity
  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );

    notify.added();
  };

  // Display loading state while product data is being fetched
  if (loading) {
    return (
      <Loader text="Loading product details..." />
    );
  }

  // Display error UI when API request fails
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

  return (
    <section className="space-y-8">
      {/* Navigation Back */}
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

      {/* Product Overview */}
      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Preview */}
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

          {/* Thumbnail Gallery */}
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
                    onClick={() =>
                      setCurrentImage(image)
                    }
                    className={`
                      h-20
                      w-full
                      object-cover
                      rounded-xl
                      cursor-pointer
                      border
                      transition-all
                      duration-300

                      ${
                        currentImage === image
                          ? `
                            border-[var(--primary)]
                            ring-2
                            ring-[var(--primary)]
                          `
                          : `
                            border-[var(--border-color)]
                          `
                      }
                    `}
                  />
                ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div
          className="
            card
            flex
            flex-col
            justify-center
          "
        >
          <div className="space-y-5">
            {/* Category & Discount */}
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

            {/* Product Title */}
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
            <p className="text-[var(--text-secondary)]">
              Brand:
              <span className="ml-2 font-medium">
                {product.brand}
              </span>
            </p>

            {/* Rating & Stock */}
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

            {/* Pricing */}
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
                ₹{product.price}
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

            {/* Product Description */}
            <p
              className="
                text-[var(--text-secondary)]
                leading-relaxed
              "
            >
              {product.description}
            </p>

            {/* Selling Points */}
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

            {/* Purchase Actions */}
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
                onClick={handleAddToCart}
                className="
                  btn-primary
                  flex-1
                "
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

      {/* Detailed Description */}
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