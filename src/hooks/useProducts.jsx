import { useEffect, useState } from "react";


function useProduct (){

    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [ retry , setRetry] = useState(0)

    useEffect(()=>{

        async function fetchProduct() {

            try {
                const res = await fetch("https://dummyjson.com/products");

            if(!res.ok){
                return new Error("Failed to fetch Product");
            }

            const data = await res.json();

            setProduct(data.products);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false)
            }
            setLoading(false);
            
        }

        fetchProduct();


    },[retry])

    return { products , loading , error , setRetry} ;
}

export default useProduct ;