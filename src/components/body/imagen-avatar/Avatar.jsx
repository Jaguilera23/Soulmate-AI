import avatar from '../../../assets/avatar.js';

import './Avatar.css';


const Avatar = ({ nombre }) => {
    return (
        <div className='flex justify-center items-center w-[220px] h-[220px] '>
            <img src={avatar[nombre]} alt="avatar imagen" className=' '/>
        </div>
    );
};

export default Avatar;