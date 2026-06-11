import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useProduct from "../hooks/useProducts";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products, loading, error , setRetry} = useProduct();

  if (loading) {
    return <Loader text="Loading products..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        message="Failed to load products."
        onRetry={()=>setRetry((prev)=>prev+1)}
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
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
