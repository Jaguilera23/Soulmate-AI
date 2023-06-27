/* eslint-disable react/no-unescaped-entities */


import './Body.css';
import HeadingTitle from './headingTitle/HeadingTitle.jsx';
import ImgPrincipal from './principal-img-home/ImgPrincipal';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import MostView from './filterMostView/MostView';
import Sponsors from './sponsors/Sponsors';
import TryNow from './buttons-main/TryNow';
import ExampleMobile from './exampleMobile/ExampleMobile';
import Suscribe from './suscribe/Suscribe';


const Body = () => {
    return (
        <section>
            <div className='flex justify-center  w-screen mt-40 mb-[70px]'>
                <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for virtual' subTitle2='companionship and friendship.'/>
            </div>
            <div className='w-screen  flex justify-center'>
                <ImgPrincipal />
            </div>
            <div className='flex justify-center mt-[44px] mb-28'>
                <p className='text-subtitlePurple font-Inter text-center w-8/12'> Find your perfect virtual partner or friend through our innovative platform. Experience meaningful connections with AI-powered personalities. Explore the world of Soulmate AI today.</p>
            </div>
            <div className='w-9/12 ms-36 flex justify-between'>
                <h2 className='clash-bold text-subtitlePurple text-3xl my-16 ps-24'>Characters</h2>
                <MostView />
            </div>
            <div className='flex justify-center mb-24'>
                <ItemListContainer />    
            </div>
            <div className='mb-48'>
                <h2 className='text-subtitlePurple clash text-7xl flex justify-center mb-11 text-trustedBlue'>TRUSTED 10,000+ COMPANY</h2>
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
                <h3 className='text-subtitlePurple text-5xl clash-regular mb-8 text-center w-2/4'>
                    Let's try to manage your monthly <span className='text-titlePurple'>finances easily</span> on our platform
                </h3>
                <TryNow text="Try Now" />
            </div>
            <div className='mt-36'>
                <ExampleMobile nombre="exampleMobile" />
            </div>
            <div className='flex  flex-col justify-center mt-8 items-center text-center mb-72'>
                <h3 className='text-subtitlePurple text-5xl clash-regular mb-28 text-center w-2/4'>
                    Texto  <span className='text-titlePurple'>simulado</span> que se <span className='text-titlePurple'>Subscriban</span> al boletin
                </h3>
                <Suscribe />
            </div>

            
            
            
        </section>
    )
}

export default Body;