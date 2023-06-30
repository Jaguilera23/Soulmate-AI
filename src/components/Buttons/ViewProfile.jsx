import svg from '../../assets/svg.js';

const ViewProfile = ({text,clase,imagen}) => { 
    const buttonClasses = `rounded-full border border-borderCard px-[0.94rem] py-[0.88rem] flex font-Inter text-xxs font-bold ${clase}`;

    return (
       <button type="button" className={buttonClasses}  >
        {text}<img src={svg[imagen]} alt="" className='ps-2 pt-0.5 '/>
       </button>
    )
}

export default ViewProfile