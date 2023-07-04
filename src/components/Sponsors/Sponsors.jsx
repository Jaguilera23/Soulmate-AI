import svg from '../../assets/svg.js';

const Sponsors = ({nombre}) => {
    return(
        <div>
            <img src={svg[nombre]} alt="sponsor imagen" />
        </div>
    )
}

export default Sponsors;