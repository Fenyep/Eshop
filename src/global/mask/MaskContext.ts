import { createContext } from "react";

interface MaskType {
    showMask: boolean,
    toggleShowMask: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MaskContext = createContext<MaskType | undefined>(undefined);