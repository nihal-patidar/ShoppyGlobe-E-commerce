import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useProduct from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoProductsFound from "./NoProductFound";

function ProductList() {
  const searchQuery = useSelector((store) => store.search.item);
  const { products, loading, error, setRetry } = useProduct();

  const [productList, setproductList] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      if (searchQuery) {
        const filteredProducts = products.filter((product) => {
          return (
            product?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product?.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        });

        setproductList(filteredProducts);
      } else {
        setproductList(products);
      }
    }
  }, [searchQuery,products]);

  if (loading) {
    return <Loader text="Loading products..." />;
  }

  if (error) {
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
        {productList.length === 0 && (
          <>
            <NoProductsFound />
            <Loader />
          </>
        )}
        {productList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
