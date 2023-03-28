import {useState} from 'react'
import Up from './Up'
import Down from './Down'
import {WiWindDeg} from 'react-icons/wi'
import {GiShrug, GiFog} from "react-icons/gi"
import image from "../../images/Hollow.svg";

function TheHollow() {
const [toggleUp, setToggleUp] = useState(false)
const [toggleDown, setToggleDown] = useState(false)

const handleToggleUp = function() {
    setToggleUp(!toggleUp)
    setToggleDown(false)
    document.getElementById("down").disabled = true
}

const handleToggleDown = function() {
    setToggleDown(!toggleDown)
    setToggleUp(false)
    document.getElementById("up").disabled = true
}


    return ( 
        <div>
        <h1>The Mysterious Island</h1>
        
        <div 
        className="games"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
            <div style={{ background: "white", opacity: "80%", padding: '5px' }}>
        <p>
            <GiFog size='4rem'/>
        </p>
        <h3>The Hollow</h3>
        <div style={{ margin: "5px", padding: "5px" }}>
        <p>You come to a fork in the path. The right goes up, and you can see a break in the trees ahead. The left path goes down and curves away out of sight. What you can see of the path seems to be shrouded in a dense fog.</p>
        </div>
        </div>
        <div className='games'style={{ background: "white", opacity: "80%" }}>
        <h3>Take the path going up or the path going down?</h3>
        {(toggleUp === false)?<button id='up'><WiWindDeg onClick={handleToggleUp}size="4rem" style = {{transform:'rotate(0deg)'}}/></button>:
        <Up/>}
        <p><GiShrug size='4rem'/></p>
        {(toggleDown === false)?<button id='down'><WiWindDeg onClick={handleToggleDown}size="4rem" style = {{transform:'rotate(180deg)'}}/></button>:
        <Down/>}
        </div>
        </div>
        </div>
     );
}

export default TheHollow;