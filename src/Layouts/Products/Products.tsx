import Pagination from "../../Components/Pagination/Pagination";
import { CiSearch } from 'react-icons/ci'
import { ChangeEvent, useContext, useState } from "react";
import { MaskContext } from "../../global/mask/MaskContext";
import useLoadProducts from "../../hooks/useProducts";
import Skeleton from "../../Components/Skeleton/Skeleton";
import Button from "../../Components/Buttons/Button";
import useForms from "../../hooks/useForms";
import FormsContainer from "../../Components/Forms/FormsContainer";
import ProductCard from "./ProductCard";

const ProductsPage = () => {

    const maskContext = useContext(MaskContext);

    const { products, refreshProducts, removeProduct } = useLoadProducts();

    const { dispatch, formState } = useForms();

    const [filterValue, setFilterValue] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value);
    }

    return (
        <div className="text-black w-full justify-start">
            {maskContext?.showMask ? 
                <FormsContainer>
                    {formState.payload}
                </FormsContainer>
            : null} 
            <div className="categories w-full">
                <div className="mt-10 flex flex-col">
                    <span className="font-semibold text-4xl">Products</span>
                    <span className="font-small text-lg text-gray-500">Find here our list of products.</span>
                </div>
                <div className="w-full flex justify-between items-center mt-20 mb-2">
                    <div className="flex items-center">
                        <Button otherStyles="mr-4 font-semibold text-blue-500 text-sm" typed="outlined" action={() => console.log("Print pub")}>Print pub</Button>
                        <Button otherStyles="font-medium" typed="filled" action={refreshProducts}>Refresh</Button>
                    </div>
                    <div className="flex">
                        <Button otherStyles="font-medium mr-2" typed="filled" action={refreshProducts}>Quantity</Button>
                        <Button otherStyles="font-medium mr-2" typed="filled" action={
                            () => {
                                dispatch({ type: 'add_product' });
                                maskContext?.toggleShowMask(false);
                                console.log(formState.payload);
                            } 
                            
                            }>Provider code</Button>
                        <div className="w-[300px] h-[40px] bg-gray-200 flex rounded-md items-center pl-2">
                            <span className="text-gray-500 text-3xl mr-1">
                                <CiSearch />
                            </span>
                            <input value={filterValue} onChange={(e) => handleChange(e)} type="text" className="input-default bg-gray-200 p-1" placeholder="Product code" />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 py-4" >

                    {products ? (
                        <>
                            {filterValue.length > 0 ? (
                                <>
                                    {products?.filter(elmt => elmt.name.includes(filterValue) || elmt.description?.includes(filterValue) || elmt.code?.includes(filterValue)).map(e => (
                                        <ProductCard product={e} deleteCallback={removeProduct} />
                                    ))}
                                </>
                            )

                            : 
                                products?.map(elmt => (
                                    <ProductCard product={elmt} deleteCallback={removeProduct} />
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

export default ProductsPage;