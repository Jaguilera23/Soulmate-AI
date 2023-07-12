import HeadingTitle from "../../components/HeadingTitle/HeadingTitle"
import ExampleMobile from "../../components/ImagesHome/ExampleMobile"
import Suscribe from "../../components/Suscribe/Suscribe"

const AboutUs = () => {
    return (
        <div className="mt-[7.25rem]">
            <HeadingTitle subTitle1='Soulmate AI is an innovative website' principalTitle='that specializes in selling' subTitle2='AI-generated characters.' divClass='text-center' />
            <article className="mt-[6.44rem] mb-[9.66rem] font-Inter text-xl text-subtitlePurple font-normal leading-7 text-center flex flex-col  items-center">
                <p className="mb-[3.81rem] lg:w-[53.875rem] lg:h-[5.1875rem] font-Inter xs:text-sm lg:text-base md:text-xl">
                    With the power of artificial intelligence, Soulmate AI offers virtual companions and friends for individuals seeking meaningful connections.
                </p>
                <p className="lg:w-[57.125rem] lg:h-[7.5rem] font-Inter xs:text-sm lg:text-base md:text-xl">
                    Whether you`re looking for a virtual partner or a virtual friend, Soulmate AI provides a unique experience where you can interact with AI-generated personalities tailored to your preferences. Discover the world of virtual companionship and forge deep connections with these AI-created characters through Soulmate AI.
                </p>
            </article>
            <ExampleMobile nombre="exampleMobile"/>
            <div className='flex  flex-col justify-center mt-8 items-center text-center mb-72'>
                <h3 className='text-subtitlePurple xs:text-3xl lg:text-5xl clash-regular mb-28 text-center w-2/4 '>
                    Subscribe to the <span className='text-titlePurple'>Newsletter</span>
                </h3>
                <Suscribe />
            </div>
        </div>
    )
}

export default AboutUs