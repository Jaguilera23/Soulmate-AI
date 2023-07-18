import  useFilters  from '../../Hooks/useFilters';
import{Link} from 'react-router-dom';

const Filters = () => {
    
    const {setFilter} = useFilters()
    
    const handleFilter = (e) => {
    setFilter(prevState => ({
        ...prevState,
        feature: e.target.value
    }))
    }


    return (
            <section className='w-4/5 h-[1.875rem] lg:mb-[5.53rem] xs:mb-[2.89rem] flex justify-between'>
                <Link to="/ItemListContainer"><h2 className='clash-bold text-subtitlePurple xs:text-base sm:text-base md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-[5.53rem] '>Characters</h2></Link>
                <div className='flex items-center'>
                    
                    <select className="bg-transparent border-none text-end font-Inter text-base focus:outline-none  focus:ring-0"  name="" id="Feature" onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Loving">Loving</option>
                        <option value="Toxic">Toxic</option>
                        <option value="Funny">Funny</option>
                        <option value="Wise">Wise</option>
                        <option value="Jelous">Jelous</option>
                        <option value="Introverted">Introverted</option>
                    </select>
                </div>
                
            </section>
            

        
    )
}

export default Filters