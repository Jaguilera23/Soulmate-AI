import ItemListContainer  from './info-Main/info.jsx';
import Img from './img-main/img.jsx';
import './main.css';


const Main = () => {
    return (
        <div className='flex w-screen h-max '>
            <ItemListContainer  name="ALEJANDRA" description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi, diam elementum amet felis nibh. Pulvinar elementum ornare pharetra leo tellus id. Elementum tempus, cursus ac imperdiet tellus ornare duis vel. Lacus, lacus volutpat vulputate egestas in." cost="235k"/>
            <Img />
        </div>
    )
}

export default Main;