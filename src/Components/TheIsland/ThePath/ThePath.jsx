import { useState } from 'react'
import TurnLeft from './TurnLeft'
import TurnRight from './TurnRight'

function ThePath() {

const [chooseLeft, setChooseLeft] = useState(null)
const [chooseRight, setChooseRight] = useState(null)


const handleClickLeft = function() {
    setChooseLeft(true)
    setChooseRight(false)
}

const handleClickRight = function() {
    setChooseRight(current => !current)
    setChooseLeft(false)
}
    return ( 
        <div>
        <p>Refreshed you stand up again, stepping over the small stream and follow the path father into the forest, until you come to a fork. You can turn left or right. Looking down both paths, they seem to be largely the same. You decide to take a chance.</p>

        <p></p>
        <h3>Turn left or right?</h3>
        || <button onClick={handleClickLeft}>left</button> |
        {chooseLeft && (<TurnLeft/>)}
        
        | <button onClick={handleClickRight}>right</button> ||
        {chooseRight && (<TurnRight/>)}
        </div>
     );
}

export default ThePath;