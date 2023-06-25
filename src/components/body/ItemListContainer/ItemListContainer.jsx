import Avatar from '../imagen-avatar/Avatar';


const ItemListContainer = () => {
    return (
        <ul className=' flex flex-wrap  w-[917px]'>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='allie'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='ryan'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='jossie'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='joshua'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='jazmine'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='jacob'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='nicole'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='brad'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='taylor'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='george'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='denzel'/></li></a>
            <a href="/" className='w-1/4 justify-center flex '><li ><Avatar nombre='april'/></li></a>
        </ul>
    )
}

export default ItemListContainer;