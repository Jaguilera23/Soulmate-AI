import imagenes from '../../assets/imagenes.js';


const ImgPrincipal = () => {
    return (
        <div className=''>
            <img src={imagenes.home} alt="Home Image " className='hidden xs:hidden md:block '  />
            <img src={imagenes.desktopMobile} alt="Home Image" className='hidden xs:block  md:hidden w-screen' />
        </div>
        
    )
}

export default ImgPrincipal;