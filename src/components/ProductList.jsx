import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import ProductItem from "./ProductItem";
import NoProductsFound from "./NoProductFound";

import useProduct from "../hooks/useProducts";

const PAGE_SIZE = 20;

function ProductList() {
  // Retrieve search query from Redux store
  const searchQuery = useSelector(
    (store) => store.search.item
  );

  // Custom hook for product fetching and API state management
  const {
    products,
    loading,
    error,
    setRetry,
  } = useProduct();

  // Stores products after applying search filter
  const [productList, setProductList] = useState([]);

  // Controls how many products are currently rendered
  const [page, setPage] = useState(1);

  // Sentinel element observed by IntersectionObserver
  const targetElement = useRef(null);

  /**
   * Filters products whenever:
   * 1. Products are fetched/updated
   * 2. Search query changes
   */
  useEffect(() => {
    // Reset pagination whenever search changes
    setPage(1);

    // Show all products when search query is empty
    if (!searchQuery) {
      setProductList(products);
      return;
    }

    // Filter products by title or description
    const filteredProducts = products.filter(
      (product) => {
        const query =
          searchQuery.toLowerCase();

        return (
          product?.title
            ?.toLowerCase()
            .includes(query) ||
          product?.description
            ?.toLowerCase()
            .includes(query)
        );
      }
    );

    setProductList(filteredProducts);
  }, [products, searchQuery]);

  /**
   * Load next batch of products.
   */
  const nextFetch = () => {
    setPage((prev) => prev + 1);
  };

  // Products currently visible on screen
  const visibleProducts = productList.slice(
    0,
    page * PAGE_SIZE
  );

  // Determines whether more products remain
  const hasMore =
    visibleProducts.length <
    productList.length;

  /**
   * Observe the sentinel loader at the bottom
   * and render more products when it becomes visible.
   */
  useEffect(() => {
    if (!targetElement.current) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (
            entry.isIntersecting &&
            hasMore
          ) {
            nextFetch();
          }
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0.1,
        }
      );

    observer.observe(targetElement.current);

    return () => observer.disconnect();
  }, [hasMore]);

  // Initial loading state
  if (loading) {
    return (
      <Loader text="Loading products..." />
    );
  }

  // API error state
  if (error) {
    if (import.meta.env.DEV) {
      console.error(error);
    }

    return (
      <ErrorMessage
        message="Failed to load products."
        onRetry={() =>
          setRetry((prev) => prev + 1)
        }
      />
    );
  }

  // Empty search results state
  if (!productList.length) {
    return <NoProductsFound />;
  }

  return (
    <section className="space-y-8">
      {/* Product Grid */}
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {visibleProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Infinite Scroll Sentinel */}
      {hasMore && (
        <div
          ref={targetElement}
          className="
            flex
            justify-center
            py-8
          "
        >
          <Loader text="Loading more products..." />
        </div>
      )}
    </section>
  );
}

export default ProductList;