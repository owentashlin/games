import {useState} from 'react'
import No from './No'
import Yes from './Yes'
import {BsStars} from 'react-icons/bs'
import {GiTrail, GiShrug} from 'react-icons/gi'
import {WiStars} from 'react-icons/wi'

function TheLights() {
const [toggleNo, setToggleNo] = useState(false)
const [toggleYes, setToggleYes] = useState(false)

const handleToggleYes = function() {
    setToggleYes(!toggleYes)
    setToggleNo(false)
    document.getElementById("no").disabled = true
}

const handleToggleNo = function() {
    setToggleNo(!toggleNo)
    setToggleYes(false)
    document.getElementById("yes").disabled = true
}

    return ( 
        <>
        <h1>The Mysterious Island</h1>
        <div className='games'>
        <h3>The Lights</h3>
        <p><WiStars size='5rem'/></p>
        <p>As you continue along the path, though, you see lights ahead in the gloom of the forest. They are warm and look to be just out of easy shouting distance. The lights seem to be bobbing up and down gently, like someone carrying a torch. Could that be another person or people!?</p>

        <h3>Follow the lights or stay on the path?</h3>
        <div className='games'>
            {(toggleNo === false)?<button id='no'><GiTrail onClick={handleToggleNo} size='4rem'/></button>:<No/>}
            <p>===</p><GiShrug size='4rem'/><p>===</p>
            {(toggleYes === false)?<button id='yes'><BsStars onClick={handleToggleYes} size='4rem'/></button>:<Yes/>}
        </div>
        </div>
        </>
     );
}

export default TheLights;