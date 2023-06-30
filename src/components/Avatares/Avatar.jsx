const Avatar = ({id,imageHome,imageCard, clase }) => {

    const src = imageHome || imageCard
    
    

    return (
        <div className='flex justify-center items-center w-[220px] h-[220px] ' key={id}>
            <img src={src} alt="avatar imagen" className={clase}/>
        </div>
    );
};

export default Avatar;