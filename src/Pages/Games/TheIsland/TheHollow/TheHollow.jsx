import {useState} from 'react'
import Up from './Up'
import Down from './Down'

function TheHollow() {
const [chooseUp, setChooseUp] = useState(null)
const [chooseDown, setChooseDown] = useState(null)

const handleClickUp = function() {
    setChooseUp(true)
    setChooseDown(false)
}

const handleClickDown = function() {
    setChooseDown(current => !current)
    setChooseUp(false)
}


    return ( 
        <div className='games'>
        <p>You come to a fork in the path. The right goes up, and you can see a break in the trees ahead. The left path goes down and curves away out of sight. What you can see of the path seems to be shrouded in a dense fog.</p>
        <h3>Take the path going up or the path going down?</h3>
        <button onClick={handleClickUp}>up</button>
        {chooseUp && (<Up/>)}
        <br></br>
        <button onClick={handleClickDown} >down</button>
        {chooseDown && (<Down/>)}
        </div>
     );
}

export default TheHollow;