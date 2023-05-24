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
import useLoadProducts from '../../hooks/useProducts';
import { formatDate } from '../../Utils/utils';

const StocksPage = () => {

    const { products } = useLoadProducts();

    console.log(products?.map(e => console.log(e.createdAt)));    

    return (
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
                    {products?.map(elmt => (
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
                                    <span className="font-semibold ml-2">{elmt.categories?.map(e =>(`${e}`))}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center text-sm">
                                    {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                                    <span className="font-semibold ml-2">Remove</span>
                                    <span className="font-semibold ml-2">, Update</span>
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
                <Pagination totalResults={10} resultsPerPage={4} onChange={() => {
                    console.log("clicked");
                }} label="Table navigation" />
            </TableFooter>
            </TableContainer>
    )
}

export default StocksPage;