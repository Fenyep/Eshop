import { ReactNode, useContext } from "react"
import { MaskContext } from "../../global/mask/MaskContext"

type Props = {
    children: ReactNode
}

const Base = ({ children }: Props) => {

    const maskContext = useContext(MaskContext)

    return (
        <>
            {maskContext?.showMask && <div onClick={() => maskContext.toggleShowMask(false)} className="fixed w-[100%] z-20 backdrop-blur-sm bg-[#0000004f] h-[100%]"></div>}
            <div className={`w-[1280px] my-0 mx-auto`}>
                {children}  
            </div>
        </>
    )
}

export default Base