import { useEffect, useState } from "react";
import { Category, CategoryType } from "../Entities/Category";

export default function useLoadCategories() {
    const [categories, setCategories] = useState<Array<Category>>();

    const [categoriesLoading, setCategoriesLoading] = useState(false);

    useEffect(() => {

      loadCategories();
    
      return () => {
        console.log("Unmounted");
      };
    }, []);

    const loadCategories = async () => {
      // setCategories([]);

      const categoriesList : Array<Category> = [];
      
      setCategoriesLoading(true);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Fake async operation completed after 10 seconds");
        }, 2500); // delay execution by 10000 milliseconds (10 seconds)
      });
    
      [1,2,3,4,5,6].map(elmt => {

        const newCategory : CategoryType = {
            label: `Categorie label ${elmt}`,
            description: `Categorie title ${elmt}`,
            code: `${elmt}`,
            createdAt: new Date(),
            modifiedAt: new Date()
        };

        categoriesList.push(new Category(newCategory));
      });

      setCategoriesLoading(false)

      setCategories(categoriesList)
    }

    const addCategory = (category: Category) => {
      const categoriesList = categories;
      categoriesList?.push(category);
      setCategories(categoriesList);
    }

    const removeCategory = (code: string) => {
      const filteredCategoriesList = categories?.filter(elmt => elmt.code != code);
      setCategories(filteredCategoriesList);
    }

    const updateCategory = (index: number, newCategory: Category) => {

      const categoriesList = categories;

      (categoriesList as Category[])[index].code = newCategory.code;
      (categoriesList as Category[])[index].label = newCategory.label;
      (categoriesList as Category[])[index].description = newCategory.description;

      setCategories(categoriesList);
    }

    return {
        categories: categories,
        setCategories: setCategories,
        categoriesLoading: categoriesLoading,
        setCategoriesLoading: setCategoriesLoading,
        refreshCategories: loadCategories,
        addCategory: addCategory,
        removeCategory: removeCategory,
        updateCategory: updateCategory
    }
    
}