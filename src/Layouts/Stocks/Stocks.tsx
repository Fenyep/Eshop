import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    Pagination
  } from '@windmill/react-ui'
import { ChangeEvent, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../Components/Buttons/Button';
import { Product } from '../../Entities/Product';
import useLoadProducts from '../../hooks/useProducts';
import { formatDate } from '../../Utils/utils';

const StocksPage = () => {

    const [fetchedProducts, setFetchedProducts] = useState<Array<Product>>([]);

    const { products } = useLoadProducts();  

    const [filterValue, setFilterValue] = useState("")

    const [monthFilterValue, setMonthFilterValue] = useState("all")

    const [yearFilterValue, setYearFilterValue] = useState(String(new Date().getFullYear()));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value);
    }

    const handleMonthSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonthFilterValue(e.target.value);
        console.log(e.target.value);
    }

    const handleYearSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setYearFilterValue(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {

        if(products && products?.length > 0) {
            setFetchedProducts(products)
        }
        return () => {
            console.log("Unmounted");
        }
    }, [products]);

    const monthOptions = [
        { value:"01", label: "January"},
        { value:"02", label: "February"},
        { value:"03", label: "March"},
        { value:"04", label: "April"},
        { value:"05", label: "May"},
        { value:"06", label: "June"},
        { value:"07", label: "July"},
        { value:"08", label: "August"},
        { value:"09", label: "September"},
        { value:"10", label: "October"},
        { value:"11", label: "November"},
        { value:"12", label: "December"},
    ];

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 20 }, (_, index) => {
      const year = currentYear - index;
      return { value: String(year), label: String(year) };
    });

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
                        <Button otherStyles="font-medium" typed="filled" action={() => {console.log("");
                        }}>Refresh</Button>
                    </div>
                    <div className="flex">
                        <select value={monthFilterValue || ''} onChange={handleMonthSelectChange} className='mr-2' name="month" id="">
                            <option value="" selected>All months</option>
                            {monthOptions.map(e => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))}
                        </select>
                        <select value={yearFilterValue} onChange={handleYearSelectChange} className='mr-2' name="year" id="">
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
                            <input value={filterValue} onChange={(e) => {handleChange(e)}} type="text" className="input-default bg-gray-200 p-1" placeholder="Product code" />
                        </div>
                    </div>
                </div>
                
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Product Code</TableCell>
                                <TableCell>Administrator</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Actions</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fetchedProducts.map(elmt => (
                                <TableRow>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">{elmt.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">{elmt.code}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">Administrator</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">{elmt.quantity}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">{elmt.categories?.map((e, index) => (
                                                
                                                elmt.categories && index < elmt.categories?.length - 1 ? `${e.label}, ` : `${e.label}`
                                                
                                                )
                                            )}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">Remove, Update</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                            <span className="font-semibold ml-2">{formatDate(elmt.createdAt)}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        <Pagination totalResults={products?.length} resultsPerPage={2} onChange={() => {
                            console.log("clicked");
                        }} label="Table navigation" />
                    </TableFooter>
                </TableContainer>

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