import {useState} from 'react'
import Up from './Up'
import Down from './Down'
import {WiWindDeg} from 'react-icons/wi'
import {GiShrug, GiFog} from "react-icons/gi"
import './../../Games.css'

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
        <>
        <h1>The Mysterious Island</h1>
        <div className='games'>
        <h3>The Hollow</h3>
        <p><GiFog size='4rem'/></p>
        <p>You come to a fork in the path. The right goes up, and you can see a break in the trees ahead. The left path goes down and curves away out of sight. What you can see of the path seems to be shrouded in a dense fog.</p>
        <div className='games'>
        <h3>Take the path going up or the path going down?</h3>
        {(toggleUp === false)?<button id='up'><WiWindDeg onClick={handleToggleUp}size="4rem" style = {{transform:'rotate(0deg)'}}/></button>:
        <Up/>}
        <p><GiShrug size='4rem'/></p>
        {(toggleDown === false)?<button id='down'><WiWindDeg onClick={handleToggleDown}size="4rem" style = {{transform:'rotate(180deg)'}}/></button>:
        <Down/>}
        </div>
        </div>
        </>
     );
}

export default TheHollow;