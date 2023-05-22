import { useEffect, useState } from "react";
import { Product, ProductType } from "../Entities/Product";

export default function useLoadProducts() {
    const [products, setProducts] = useState<Array<Product>>();

    const [productsLoading, setProductsLoading] = useState(false);

    useEffect(() => {
      
      loadProducts()
    
      return () => {
        console.log("Unmounted");
      };
    }, []);

    const loadProducts = async () => {
      setProducts([]);

      const productsList : Array<Product> = [];
      
      setProductsLoading(true);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Fake async operation completed after 2.5 seconds");
        }, 2500); // delay execution by 2500 milliseconds (2.5 seconds)
      });
    
      
      [1,2,3,4,5,6].map(elmt => {

        const newProduct : ProductType = {
            name: `Product name ${elmt}`,
            description: `Product title ${elmt}`,
            code: `${elmt}`,
            providerCode: `${elmt}`,
            unitPrice: 10,
            images: [],
            categories: []
        };

        productsList.push(new Product(newProduct));
      });

      
      setProductsLoading(false)
      
      setProducts(productsList)

    }

    return {
        products: products,
        setProducts: setProducts,
        productsLoading: productsLoading,
        setProductsLoading: setProductsLoading,
        refreshProducts: loadProducts
    }
    
}