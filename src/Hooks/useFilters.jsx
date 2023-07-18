import { useContext} from "react";
import { FilterContext } from "../context/FilterProvider";

function useFilters () {



const {filter,setFilter} = useContext(FilterContext);

const filterProducts = (characters) => {
    if (filter.feature === "All") {
        return characters;
    }
    
    return characters.filter((character) => character.feature === filter.feature);
};

return {filter, filterProducts, setFilter}
}
export default useFilters;
