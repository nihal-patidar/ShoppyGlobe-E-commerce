import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useProduct from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoProductsFound from "./NoProductFound";

function ProductList() {
  // Retrieve search query from Redux store
  const searchQuery = useSelector((store) => store.search.item);

  // Custom hook for product fetching and API state management
  const { products, loading, error, setRetry } = useProduct();

  // Stores products after applying search filter
  const [productList, setproductList] = useState([]);

  /**
   * Filters products whenever:
   * 1. Products are fetched/updated
   * 2. Search query changes
   */
  useEffect(() => {
    // Show all products when search query is empty
    if (!searchQuery) {
      setproductList(products);
      return;
    }

    // Filter products by title or description
    const filteredProducts = products.filter((product) => {
      const query = searchQuery.toLowerCase();

      return (
        product?.title?.toLowerCase().includes(query) ||
        product?.description?.toLowerCase().includes(query)
      );
    });

    setproductList(filteredProducts);
  }, [searchQuery, products]);

  // Display loading UI while products are being fetched
  if (loading) {
    return <Loader text="Loading products..." />;
  }

  // Display error UI if API request fails
  if (error) {
    if (import.meta.env.DEV) {
      console.error(error);
    }

    return (
      <ErrorMessage
        message="Failed to load products."
        onRetry={() => setRetry((prev) => prev + 1)}
      />
    );
  }

  return (
    <section>
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {productList.length ? (
          // Render filtered products
          productList.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        ) : (
          // Display when no products match the search query
          <NoProductsFound />
        )}
      </div>
    </section>
  );
}

export default ProductList;