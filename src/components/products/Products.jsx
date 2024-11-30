import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect( ()=>{

        fetch ('./apni.json')
        .then(res=>res.json())
        .then (data=>setProducts(data));
    },[])

    // console.log(products)

    
    return (
        <div className="pt-20 mt-20">
        <div className="py-10">
        <h1 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
     <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8">
     {
        products.map(product =><Product product={product} key={product.product_id}></Product>)
      }
     </div>
            
        </div>

            
        </div>
    );
};

export default Products;