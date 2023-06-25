import imagenes from '../../../assets/imagenes.js';

const ExampleMobile = ({nombre}) => {
    return (
        <div className='flex justify-center'>
            <img src={imagenes[nombre]} alt="example mobile" />
        </div>
    )
};

export default ExampleMobile;
