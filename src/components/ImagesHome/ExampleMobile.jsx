import imagenes from '../../assets/imagenes.js';

const ExampleMobile = ({nombre}) => {
    return (
        <div className='flex justify-center xs:mb-20 md:mb-0'>
            <img src={imagenes[nombre]} alt="example mobile" className='xs:w-[22.7rem] sm:w-[36.9rem]'/>
        </div>
    )
};

export default ExampleMobile;
