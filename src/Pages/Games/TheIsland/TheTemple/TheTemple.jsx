import {useState} from 'react'
import Idol from './Idol';
import Feather from './Feather';
import {GiAbstract005, GiFeather, GiAbstract054, GiShrug} from 'react-icons/gi'

function TheTemple() {
const [toggleIdol, setToggleIdol] = useState(false)
const [toggleFeather, setToggleFeather] = useState(false)

const handleToggleIdol = function() {
    setToggleIdol(!toggleIdol)
    setToggleFeather(false)
    document.getElementById("feather").disabled = true
}

const handleToggleFeather = function() {
    setToggleFeather(!toggleFeather)
    setToggleIdol(false)
    document.getElementById("idol").disabled = true
}

    return ( 
        <>
        <h1>The Mysterious Island</h1>
        <div className='games'>
        <h3>The Temple</h3>
        <p><GiAbstract054 size="4rem"/></p>
        <p>You walk through arching entrance and as your eyes adjust to the dim interior, you see that in the center of the room is a stone pedestal, and on that pedestal is a set of golden balancing scales. On one side is what looks like a solid gold idol of some goddess, mouth open and screaming. On the other side is a single feather, emerald green in color and vibrant even in the gloom of the chamber.</p>

        <h3>Take the idol or the feather?</h3>
        <div className='games'>
            {(toggleIdol === false)?<button id='idol'><GiAbstract005 onClick={handleToggleIdol} size='4rem'/></button>:<Idol/>}
            <p>===</p><GiShrug size='4rem'/><p>===</p>
            {(toggleFeather === false)?<button id='feather'><GiFeather onClick={handleToggleFeather} size='4rem'/></button>:<Feather/>}
        </div>        
        </div>
        </>
     );
}

export default TheTemple;