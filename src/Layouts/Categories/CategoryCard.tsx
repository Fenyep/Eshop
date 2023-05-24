import { Category } from "../../Entities/Category";

type Props = {
    category: Category,
    deleteCallback: (code: string) => void
}

const CategoryCard = ({ category, deleteCallback }: Props) => {
    return (
        <div className="w-auto bg-blue-500 p-2 rounded-md">
            <div className="w-full h-[300px] bg-red-500 rounded-md">.</div>
            <div className="flex mt-4 items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-600">{category.label} </span>
                    <span className="text-md font-medium">{category.description} </span>
                </div>

                <button onClick={() => {
                    if(category.code != undefined) {
                        deleteCallback(category.code)
                    }
                }} className="text-black-500">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default CategoryCard;