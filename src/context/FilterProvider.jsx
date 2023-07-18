import { createContext, useState } from "react";

//Create context

export const FilterContext = createContext();

//Provider

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState({
        feature: "All"
    })
    return (
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}
        >{children}
        </FilterContext.Provider>
    )
}
