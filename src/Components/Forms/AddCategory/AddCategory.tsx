import Button from "../../Buttons/Button"

const AddCategory = () => {
    return (
        <>
            <Button action={() => {console.log("Close Form");
            }} type={"filled"}>Clear</Button>
            <Button action={() => {console.log("Close Form");
            }} type={"filled"}>Add Category</Button>
        </>
    )
}

export default AddCategory