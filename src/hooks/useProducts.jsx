import { useEffect, useState } from "react";


function useProduct (){

    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [ retry , setRetry] = useState(0)
    const [url , setUrl] = useState("https://dummyjson.com/products");

    useEffect(()=>{

        async function fetchProduct() {

            try {
                const res = await fetch(url);

            if(!res.ok){
                return new Error("Failed to fetch Product");
            }

            const data = await res.json();

            console.log("product list" , data)
            let products = data.products.map((product)=>{
                let inRuppee = (product.price * 85).toFixed(0)
                return { ...product , price : inRuppee} ;
            })

            setProduct(products)

            }catch(err){
                setError(err);
            }finally{
                setLoading(false)
            }
            setLoading(false);
            
        }

        fetchProduct();


    },[retry,url])

    return { products , loading , error , setRetry} ;
}

export default useProduct ;