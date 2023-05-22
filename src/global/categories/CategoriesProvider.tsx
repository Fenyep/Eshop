import { ReactNode } from "react"
import { CategoriesContext } from "./CategoriesContext"

type Props = {
    children: ReactNode
}

const CategoriesProvider = ({ children }: Props) => {
    return (
        <CategoriesContext.Provider value={{}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;