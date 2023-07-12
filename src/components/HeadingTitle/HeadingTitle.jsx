const HeadingTitle = ({ subTitle1, principalTitle,subTitle2,divClass }) => {


    return(
        <div className={divClass}>
            <h5 className="clash lg:text-4xl  xs:text-2xl mb-[5px] text-subtitlePurple">{subTitle1}</h5>
            <h1 className="lg:text-7xl mb-[5px] xs:text-3xl  clash text-titlePurple">{principalTitle}</h1>
            <h5 className="clash lg:text-4xl l xs:text-2xl  text-subtitlePurple">{subTitle2}</h5>
        </div>
        
    )
}

export default HeadingTitle;