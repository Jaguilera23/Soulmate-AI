import "./HamIcon.css"

function HamIcon(props) {
    return (
  
        <div  onClick={props.handleClick} 
              className={`icon  nav-icon-5 ${props.isOpen ? 'open' : ''}`} >
          <span></span>
          <span></span>
          <span></span>
        </div>

    )
  }
  

export default HamIcon;


