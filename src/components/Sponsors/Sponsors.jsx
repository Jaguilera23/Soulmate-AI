import svg from '../../assets/svg.js';

const Sponsors = ({nombre}) => {
    return(
        <div>
            <img src={svg[nombre]} alt="sponsor imagen" className=''/>
        </div>
    )
}

export default Sponsors;