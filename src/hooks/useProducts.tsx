import { useEffect, useState } from "react";
import { Product, ProductType } from "../Entities/Product";
import useLoadCategories from "./useCategories";

export default function useLoadProducts() {
    const [products, setProducts] = useState<Array<Product>>();

    const [productsLoading, setProductsLoading] = useState(false);

    const { categories } = useLoadCategories();

    useEffect(() => {
      
      loadProducts()
    
      return () => {
        console.log("Unmounted");
      };
    }, [categories]);

    const loadProducts = async () => {

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
            categories: categories ?? [],
            createdAt: new Date(),
            modifiedAt: new Date(),
        };

        productsList.push(new Product(newProduct));
      });

      setProductsLoading(false)
      
      setProducts(productsList)
    }

    const addProduct = (product: Product) => {
      const productsList = products;
      productsList?.push(product);
      setProducts(productsList);
    }

    const removeProduct = (code: string) => {
      const filteredProductsList = products?.filter(elmt => elmt.code != code);
      setProducts(filteredProductsList);
    }

    const updateProduct = (index: number, newProduct: Product) => {

      const productsList = products;

      (productsList as Product[])[index].code = newProduct.code;
      (productsList as Product[])[index].categories = newProduct.categories;
      (productsList as Product[])[index].providerCode = newProduct.providerCode;
      (productsList as Product[])[index].description = newProduct.description;
      (productsList as Product[])[index].images = newProduct.images;
      (productsList as Product[])[index].unitPrice = newProduct.unitPrice;
      (productsList as Product[])[index].name = newProduct.name;

      setProducts(productsList);
    }

    return {
        products: products,
        setProducts: setProducts,
        productsLoading: productsLoading,
        setProductsLoading: setProductsLoading,
        refreshProducts: loadProducts,
        addProduct: addProduct,
        removeProduct: removeProduct,
        updateProduct: updateProduct,
    }
    
}