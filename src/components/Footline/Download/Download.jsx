import svg from "../../../assets/svg.js";

const Download = ({additionalClass}) => {
    return (
        <div>
            <ul className={additionalClass}>
                <li className={`mb-6 ${additionalClass}`}>Download</li>
                <li className='mb-4' > <img src={svg.google}   alt="google imagen"/></li>
                <li> <img src={svg.apple} alt="apple imagen"  /></li>
            </ul>
        </div>
    )
}

export default Download