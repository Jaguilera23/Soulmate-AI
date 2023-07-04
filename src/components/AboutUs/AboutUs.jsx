import HeadingTitle from "../HeadingTitle/HeadingTitle"
import ExampleMobile from "../Home/exampleMobile/ExampleMobile"
import Suscribe from "../Suscribe/Suscribe"

const AboutUs = () => {
    return (
        <div className="mt-[7.25rem]">
            <HeadingTitle subTitle1='Soulmate AI is an innovative website' principalTitle='that specializes in selling' subTitle2='AI-generated characters.' divClass='text-center' />
            <article className="mt-[6.44rem] mb-[9.66rem] font-Inter text-xl text-subtitlePurple font-normal leading-7 text-center flex flex-col  items-center">
                <p className="mb-[3.81rem] w-[53.875rem] h-[5.1875rem]">
                    With the power of artificial intelligence, Soulmate AI offers virtual companions and friends for individuals seeking meaningful connections.
                </p>
                <p className="w-[57.125rem] h-[7.5rem]">
                    Whether you`re looking for a virtual partner or a virtual friend, Soulmate AI provides a unique experience where you can interact with AI-generated personalities tailored to your preferences. Discover the world of virtual companionship and forge deep connections with these AI-created characters through Soulmate AI.
                </p>
            </article>
            <ExampleMobile nombre="exampleMobile"/>
            <div className='flex  flex-col justify-center mt-8 items-center text-center mb-72'>
                <h3 className='text-subtitlePurple text-5xl clash-regular mb-28 text-center w-2/4'>
                    Texto  <span className='text-titlePurple'>simulado</span> que se <span className='text-titlePurple'>Subscriban</span> al boletin
                </h3>
                <Suscribe />
            </div>
        </div>
    )
}

export default AboutUs