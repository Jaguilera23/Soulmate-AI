const Avatar = ({imageHome,imageCard, clase }) => {

    const src = imageHome || imageCard
    
    

    return (
        <div className='flex justify-center items-center w-[220px] h-[220px] '>
            <img src={src} alt="avatar imagen" className={clase}/>
        </div>
    );
};

export default Avatar;