import Pagination from "../../Components/Pagination/Pagination";
import { CiSearch } from 'react-icons/ci'
import { IoIosAdd } from 'react-icons/io'
import { MaskContext } from "../../global/mask/MaskContext";
import { ChangeEvent, useContext, useState } from "react";
import useLoadCategories from "../../hooks/useCategories";
import Skeleton from "../../Components/Skeleton/Skeleton";
import Button from "../../Components/Buttons/Button";
import useForms from "../../hooks/useForms";
import FormsContainer from "../../Components/Forms/FormsContainer";
import CategoryCard from "./CategoryCard";

const CategoriesPage = () => {

    const maskContext = useContext(MaskContext);

    const { categories, refreshCategories, removeCategory } = useLoadCategories();

    const { dispatch, formState } = useForms();

    const [filterValue, setFilterValue] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value);
    }

    console.log(categories);

    return (
        <div className="text-black w-full justify-start">

            {maskContext?.showMask ? 
                <FormsContainer>
                    {formState.payload}
                </FormsContainer>
            : null} 

            <div className="categories w-full">
                <div className="mt-10 flex flex-col">
                    <span className="font-semibold text-4xl">Categories</span>
                    <span className="font-small text-lg text-gray-500">Find here our list of categories.</span>
                </div>
                <div className="w-full flex justify-between items-center mt-20 mb-2">
                    <div className="flex items-center">
                        <Button otherStyles="mr-4 font-semibold text-blue-500 text-sm" typed="outlined" action={() => console.log("Catalogue")}>Catalogue</Button>
                        <Button otherStyles="font-medium" typed="filled" action={refreshCategories}>Catalogue</Button>
                    </div>
                    <div className="flex">
                        <Button otherStyles="mr-2 flex" typed="filled" action={() => {
                            maskContext?.toggleShowMask(false);
                            dispatch({ type: 'add_category'})
                            console.log(formState.payload);
                        }}>
                            <span className="text-2xl">
                                <IoIosAdd color="#FFFFFF" fill="#FFFFFF" />
                            </span>
                            <span>
                                Add a category
                            </span> 
                        </Button>
                        <div className="w-[300px] h-[40px] bg-gray-200 flex rounded-md items-center pl-2">
                            <span className="text-gray-500 text-3xl mr-1">
                                <CiSearch />
                            </span>
                            <input value={filterValue} onChange={handleChange} type="text" className="input-default bg-gray-200 p-1" placeholder="Search a category" />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 py-4" >

                    {categories ? (
                        <>
                            {filterValue.length > 0 ? (
                                <>
                                    {categories?.filter(elmt => elmt.label.includes(filterValue) || elmt.description?.includes(filterValue) || elmt.code?.includes(filterValue)).map(e => (
                                        <CategoryCard category={e} deleteCallback={removeCategory} />
                                    ))}
                                </>
                            )

                            : 
                                categories?.map(elmt => (
                                    <CategoryCard category={elmt} deleteCallback={removeCategory} />
                                ))
                            }
                        </>
                    ) : (
                        <>
                            {[1,2,3,4,5,6].map(() => (
                                <Skeleton />
                            ))}
                        </>
                    )
                }
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default CategoriesPage;