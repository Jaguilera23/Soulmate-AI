const Avatar = ({imageHome,imageCard, clase }) => {

    const src = imageHome || imageCard
    
    

    return (
        <div className='flex sm:m-2 xs:m-2 md:justify-center lg:justify-center xl:justify-center 2xl:justify-center items-center xs:w-[9.80rem] sm-[9.80rem] md:w-[13.75rem]  lg:w-[13.75rem]  xl:w-[13.75rem]  2xl:w-[13.75rem] '>
            <img src={src} alt="avatar imagen" className={clase}/>
        </div>
    );
};

export default Avatar;