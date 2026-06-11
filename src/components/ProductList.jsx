import useProduct from "../hooks/useProducts";

function ProductList(){

    const {products , loading , error} = useProduct();

    console.log(products)

    return (
        <h1> Product List </h1>
    )
}

export default ProductList ;