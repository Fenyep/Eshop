import { ReactNode, useContext } from "react"
import { CiCircleRemove } from "react-icons/ci"
import { MaskContext } from "../../global/mask/MaskContext"

type Props = {
    children: ReactNode,
}

const FormsContainer = ({ children }: Props) => {
    
    const maskContext = useContext(MaskContext);
    
    return (
        <div className="fixed inset-0 z-30 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 w-1/2" style={{
                top: "20%",
                left: "25%"
            }}>
                <div className="w-full flex justify-end text-5xl text-blue-700">
                    <div className=" hover:cursor-pointer" onClick={() => maskContext?.toggleShowMask(false)}>
                        <CiCircleRemove />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default FormsContainer