
import './Landing.css';
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle.jsx';
import ImgPrincipal from '../../components/ImagesHome/ImgPrincipal';
import Characters from '../../components/Characters/Characters'
import MostView from '../../components/FilterMostView/MostView';
import Sponsors from '../../components/Sponsors/Sponsors';
import ExampleMobile from '../../components/ImagesHome/ExampleMobile';
import Suscribe from '../../components/Suscribe/Suscribe';
import TryNow from '../../components/Buttons/TryNow'


const Landing = () => {
    return (
        <section>
            <div className='flex justify-center  w-screen xs:mt-20 md:mt-40 mb-[70px]'>
                <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for virtual' subTitle2='companionship and friendship.' divClass='text-center'/>
            </div>
            <div className='w-screen  flex justify-center'>
                <ImgPrincipal />
            </div>
            <div className='flex justify-center mt-[44px] mb-28'>
                <p className='text-subtitlePurple xs:text-sm  md:text-xl  font-Inter text-center xs:w-[22rem] ] md:w-8/12 '> Find your perfect virtual partner or friend through our innovative platform. Experience meaningful connections with AI-powered personalities. Explore the world of Soulmate AI today.</p>
            </div>
            <div className='flex justify-center'>
                <MostView />
            </div>
            <div className='flex justify-center mb-24'>
                <Characters claseContenedor="xs:w-[9rem]"/>    
            </div>
            <div className='mb-48'>
                <h2 className='text-subtitlePurple clash xs:text-base md:text-5xl lg:text-7xl  flex justify-center mb-11 text-trustedBlue'>TRUSTED 10,000+ COMPANY</h2>
                <ul className='flex  justify-evenly '>
                    <li>
                        <Sponsors nombre='velocity' />    
                    </li>
                    <li>
                        <Sponsors nombre='muzica' />  
                    </li>
                    <li>
                        <Sponsors nombre='foxHub' /> 
                    </li>
                    <li>
                        <Sponsors nombre='ztos' /> 
                    </li>
                    <li>
                        <Sponsors nombre='liva' />  
                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center text-center mb-8'>
                <h3 className='text-subtitlePurple xs:text-2xl   md:text-5xl  clash-regular mb-8 text-center xs:w-[22rem] md:w-2/4 '>
                    Let`s try to manage your monthly <span className='text-titlePurple'>finances easily</span> on our platform
                </h3>
                <TryNow text="Try Now" />
            </div>
            <div className='mt-36'>
                <ExampleMobile nombre="exampleMobile" />
            </div>
            <div className='flex  flex-col justify-center mt-8 items-center text-center   mediaSuscribe'>
                <h3 className='text-subtitlePurple text-5xl clash-regular mb-28 text-center w-2/4 md:block '>
                Subscribe to the <span className='text-titlePurple'>Newsletter</span>
                </h3>
                <Suscribe />
            </div>

            
            
            
        </section>
    )
}

export default Landing;