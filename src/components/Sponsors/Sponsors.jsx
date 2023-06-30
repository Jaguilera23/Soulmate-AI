import svg from '../../assets/svg.js';

const Sponsors = ({nombre}) => {
    return(
        <div>
            <li><img src={svg[nombre]} alt="sponsor imagen" /></li>
        </div>
    )
}

export default Sponsors;