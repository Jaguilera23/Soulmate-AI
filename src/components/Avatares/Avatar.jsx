const Avatar = ({imageHome,imageCard, clase }) => {

    const src = imageHome || imageCard
    
    

    return (
        <div className='flex sm:m-2 xs:m-2 md:justify-center  items-center   md:w-[13.75rem]  '>
            <img src={src} alt="avatar imagen" className={clase}/>
        </div>
    );
};

export default Avatar;