const HeadingTitle = ({ subTitle1, principalTitle,subTitle2 }) => {
    return(
        <div className=" text-center">
            <h5 className="clash text-4xl mb-[5px] text-subtitlePurple">{subTitle1}</h5>
            <h1 className="text-7xl mb-[5px] clash text-titlePurple">{principalTitle}</h1>
            <h5 className="clash text-4xl  text-subtitlePurple">{subTitle2}</h5>
        </div>
        
    )
}

export default HeadingTitle;