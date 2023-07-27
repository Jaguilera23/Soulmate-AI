const ImageDetail = ({imageDetail,clase}) => {

    const aditionalClass = `z-20 flip ${clase}`

    return (
        
            <img src={imageDetail} alt="" className={aditionalClass}/>
        
    )
}

export default ImageDetail