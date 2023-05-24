import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../Components/Buttons/Button';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import useLoadProducts from '../../hooks/useProducts';
import { formatDate, monthOptions, yearOptions } from '../../Utils/utils';

const StocksPage = () => {

    const { products, refreshProducts } = useLoadProducts();  

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5;

    
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    
    const [codeFilterValue, setCodeFilterValue] = useState("")
    
    const [monthFilterValue, setMonthFilterValue] = useState("")
    
    const [yearFilterValue, setYearFilterValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCodeFilterValue(e.target.value);
    }

    const handleMonthSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonthFilterValue(e.target.value);
        console.log(e.target.value);
    }

    const handleYearSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setYearFilterValue(e.target.value);
        console.log(e.target.value);
    }

    const filteredProducts = useCallback((code: string, month: string, year: string) => {
        let fetchedProducts = products;

        if(code != "") {
            fetchedProducts = fetchedProducts?.filter(elmt => elmt.code === code);
        }

        if(year != "") {
            fetchedProducts = fetchedProducts?.filter(elmt => `${formatDate(elmt.createdAt).year}` === year);
        }

        if(month != "") {
          fetchedProducts = fetchedProducts?.filter(elmt => `${formatDate(elmt.createdAt).month}` === month);
        }

        return fetchedProducts;
    }, [products])

    const totalPages = useMemo(() => Math.ceil(filteredProducts(codeFilterValue, monthFilterValue, yearFilterValue)?.length ?? 0 / pageSize), [codeFilterValue, monthFilterValue, yearFilterValue, filteredProducts])

    return (
        <div className='text-black w-full justify-start'>
            <div className="categories w-full">
                <div className="mt-10 flex flex-col">
                    <span className="font-semibold text-4xl">Stocks</span>
                    <span className="font-small text-lg text-gray-500">Administrate your list of products.</span>
                </div>
                <div className="w-full flex justify-between items-center mt-20 mb-2">
                    <div className="flex items-center">
                        <Button otherStyles="mr-4 font-semibold text-blue-500 text-sm" typed="outlined" action={() => console.log("Print")}>Print</Button>
                        <Button otherStyles="font-medium" typed="filled" action={() => refreshProducts()}>Refresh</Button>
                    </div>
                    <div className="flex">
                        <select value={monthFilterValue || ''} onChange={handleMonthSelectChange} className='mr-2' name="month" id="">
                            <option value="" selected>All months</option>
                            {monthOptions.map(e => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))}
                        </select>
                        <select value={yearFilterValue} onChange={handleYearSelectChange} className='mr-2' name="year" id="">
                            <option value="" selected>All years</option>
                            {yearOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="w-[300px] h-[40px] bg-gray-200 flex rounded-md items-center pl-2">
                            <span className="text-gray-500 text-3xl mr-1">
                                <CiSearch />
                            </span>
                            <input value={codeFilterValue} onChange={(e) => {handleChange(e)}} type="text" className="input-default bg-gray-200 p-1" placeholder="Product code" />
                        </div>
                    </div>
                </div>

                <div className='border-2 w-full mt-4 px-2 py-3 rounded-lg'>
                    <table className="p-4 w-full rounded-lg">
                        <thead className=''>
                            <tr className='text-white bg-slate-950'>
                                <th className='text-sm px-10 py-3'>Product Name</th>
                                <th className='text-sm px-10 py-3'>Product Code</th>
                                <th className='text-sm px-10 py-3'>Administrator</th>
                                <th className='text-sm px-10 py-3'>Quantity</th>
                                <th className='text-sm px-10 py-3'>Category</th>
                                <th className='text-sm px-10 py-3'>Actions</th>
                                <th className='text-sm px-10 py-3'>Date</th>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                        { products && products.length > 0 ? filteredProducts(codeFilterValue, monthFilterValue, yearFilterValue)?.map((elmt, index) => (
                            <tr className={`${index % 2 != 0 ? 'bg-gray-200 hover:bg-gray-300' : ""}`}>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">{elmt.name}</span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">{elmt.code}</span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">Administrator</span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">{elmt.quantity}</span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className={`font-medium text-center w-full ml-2 ${elmt.categories && elmt.categories.length > 0 ? "" : 'flex justify-center'}`}>{ elmt.categories && elmt.categories.length > 0 ? elmt.categories.map((e, index) => (
                                                elmt.categories && index < elmt.categories?.length - 1 ? `${e.label}, ` : `${e.label}`
                                            )
                                        ) : (
                                            <div className='w-10 h-10 rounded-full bg-transparent border-dashed animate-spin border-4 border-slate-700 '></div>
                                        )}
                                        </span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">Remove, Update</span>
                                    </div>
                                </td>
                                <td className='border-2 py-2'>
                                    <div className="flex w-full items-center text-sm">
                                        {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                        <span className="font-medium text-center w-full ml-2">{formatDate(elmt.createdAt).date}</span>
                                    </div>
                                </td>
                            </tr>
                        )) : 
                        (
                            <tr className='border-4 animate-pulse w-full'>
                                {[1,2,3,4,5,6,7].map(() => (
                                    <td className='bg-gray-300 w-full py-4'>
                                    </td>
                                ))}
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    <div className='w-full mt-4 flex justify-end'>
                        <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                
                {/* <Pagination totalResults={products?.length} resultsPerPage={2} onChange={() => {
                        console.log("clicked");
                }} label="Table navigation" /> */}
                </div>
                
                

                {/* <div className="w-full grid grid-cols-3 gap-4 py-4" >

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
                </div> */}
            </div>
            
        </div>
    )
}

export default StocksPage;