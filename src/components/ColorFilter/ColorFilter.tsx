import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { Filter } from "./ColorFilterStyle";
import { useContext } from 'react'

interface ColorFilterProps {
    children: React.ReactNode
}

export function ColorFilter({ children }: ColorFilterProps) {

    const { theme } = useContext(ThemeContext)
    return (
        <Filter backgroundcolor={theme.backgroundColor}>
            {children}
        </Filter>
    )
}