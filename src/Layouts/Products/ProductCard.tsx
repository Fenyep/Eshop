import { Product } from "../../Entities/Product";

type Props = {
    product: Product,
    deleteCallback: (code: string) => void
}

const ProductCard = ({ product, deleteCallback } : Props) => {
    return (
        <div className="w-auto bg-blue-500  p-2 rounded-md">
            <div className="w-full h-[300px] bg-red-500 rounded-md">.</div>
            <div className="flex mt-4 items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-600">{product.name} </span>
                    <span className="text-md font-medium">{product.description} </span>
                </div>
                <button onClick={() => {
                    if(product.code != undefined) {
                        deleteCallback(product.code)
                    }
                }} className="text-black-500">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ProductCard;