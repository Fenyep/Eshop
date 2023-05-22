import { useReducer } from "react";
import AddCategory from "../Components/Forms/AddCategory/AddCategory";
import AddProduct from "../Components/Forms/AddProduct/AddProduct";

type State = {
    payload: JSX.Element | null,
}

type Action = 
    { type: 'add_product' }
    | { type: 'add_category' };

const initialState: State = {
    payload: null
}

function reducer(state: State, action: Action): State {

    switch (action.type) {
        case "add_product":
            console.log("Executed product");
            
            return { 
                payload: <AddProduct />
            }
        case "add_category":
            console.log("Executed category");

            return  { 
                payload: <AddCategory />
            }
        default:
            return { ...state }
    }
}

const useForms = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        formState: state,
        dispatch: dispatch
    }
}

export default useForms;