import { useState } from 'react'
import TurnLeft from './TurnLeft'
import TurnRight from './TurnRight'
import {WiWindDeg} from 'react-icons/wi'
import {GiShrug} from "react-icons/gi"
import './../../Games.css'

function ThePath() {

const [toggleLeft, setToggleLeft] = useState(false)
const [toggleRight, setToggleRight] = useState(false)

const handleToggleLeft = function() {
    setToggleLeft(!toggleLeft)
    setToggleRight(false)
    document.getElementById("right").disabled = true
}

const handleToggleRight = function() {
    setToggleRight(!toggleRight)
    setToggleLeft(false)
    document.getElementById("left").disabled = true
}

    return ( 
        <div className='games'>
        <h3>The Path</h3>
        <p>Refreshed you stand up again, stepping over the small stream and follow the path father into the forest, until you come to a fork. You can turn left or right. Looking down both paths, they seem to be largely the same. No help for it though, you'll have to pick a direction...</p>

        <h3>Turn left or right?</h3>
            <div className='games'>
            {(toggleRight === false)?<button id='right'><WiWindDeg onClick={handleToggleRight} size="4rem" style = {{transform:'rotate(90deg)'}}/></button>:<TurnRight/>}
            <p><GiShrug size='4rem'/></p>
            {(toggleLeft === false)?<button id='left'><WiWindDeg onClick={handleToggleLeft} size="4rem" style = {{transform:'rotate(270deg)'}}/></button>:<TurnLeft/>}
            </div>
        </div>
     );
}

export default ThePath;