import { ReactNode, useState } from "react"
import { MaskContext } from "./MaskContext"

type Props = {
    children: ReactNode
}

const MaskProvider = ({ children } : Props) => {
    
    const [showMask, setShowMask] = useState<boolean>(false);

    const handleShowMask = () => setShowMask(!showMask);

    const value = {
        showMask: showMask,
        toggleShowMask: handleShowMask
    }

    return (
        <MaskContext.Provider value={value}>
            {children}
        </MaskContext.Provider>
    )
}

export default MaskProvider