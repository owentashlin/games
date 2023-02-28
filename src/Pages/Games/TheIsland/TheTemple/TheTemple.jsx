import {useState} from 'react'
import Idol from './Idol';
import Feather from './Feather';

function TheTemple() {
const [chooseIdol, setChooseIdol] = useState(null)
const [chooseFeather, setChooseFeather] = useState(null)

const handleClickIdol = function() {
    setChooseIdol(current => !current)
    setChooseFeather(false)
}

const handleClickFeather = function() {
    setChooseFeather(current => !current)
    setChooseIdol(false)
}

    return ( 
        <div className='games'>
        <p>You walk through arching entrance and as your eyes adjust to the dim interior, you see that in the center of the room is a stone pedestal, and on that pedestal is a set of golden balancing scales. On one side is what looks like a solid gold idol of some goddess, mouth open and screaming. On the other side is a single feather, emerald green in color and vibrant even in the gloom of the chamber.</p>

        <h3>Take the idol or the feather?</h3>
        <button onClick={handleClickIdol}>idol</button>
        {chooseIdol && (<Idol/>)}
        <button onClick={handleClickFeather}>feather</button>
        {chooseFeather && (<Feather/>)}
        </div>
     );
}

export default TheTemple;