import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Buttons/Button"

type Inputs = {
    code: string,
    name: string,
    price: number,
    quantity: string,
    category: string,
    providerCode: string,
    description: string
}


const AddProduct = () => {
    const { register, reset, handleSubmit} =  useForm<Inputs>();
    
    const onSubmit:  SubmitHandler<Inputs> = data => console.log(data);

    /**
     * Function executed when errors occurs inside the form on submition
     * @param {{}} errors
     */
    const onErrors = (errors: FieldValues) => {
        console.log(errors);
    };

    const clearForm = () => {
        reset({
            code: "",
            name: "",
            price: 0,
            quantity: "",
            category: "",
            providerCode: "",
            description: ""
        })
    }

    return (
        <>
            <div className="font-semibold mb-8 text-blue-500 text-2xl">Add a product</div>
            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit, onErrors)} action="">
                    <div className="w-full flex">

                        <div className="w-1/2 px-4">
                            <div className="mb-2">
                                <div className="font-medium mb-2">Code</div>
                                <input {...register('code', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="text" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Name</div>
                                <input {...register('name', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="text" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Price</div>
                                <input {...register('price', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="text" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Quantity</div>
                                <input {...register('quantity', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="number" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Category</div>
                                <input {...register('category', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="text" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Provider Code</div>
                                <input {...register('providerCode', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none" type="text" />
                            </div>
                            <div className="mb-2">
                                <div className="font-medium mb-2">Description</div>
                                <textarea  {...register('description', {required: true})} className="border-gray-300 border-2 rounded-md px-2 py-1 w-full focus:outline-none"></textarea>
                            </div>
                        </div>
                        <div className="p-4 rounded-md w-1/2 h-[100px] bg-red-500"></div>
                    </div>
                    <div className="mt-8 w-full flex justify-end">
                        <Button otherStyles="mr-4 border-gray-400 text-black" action={clearForm} typed={"outlined"}>Clear</Button>
                        <Button typed={"filled"} submit={true}>Add Product</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct