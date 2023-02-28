import {useState} from 'react'
import No from './No'
import Yes from './Yes'
import {BsStars} from 'react-icons/bs'
import {GiTrail, GiShrug} from 'react-icons/gi'

function TheLights() {
const [toggleNo, setToggleNo] = useState(false)
const [toggleYes, setToggleYes] = useState(false)

const handleToggleYes = function() {
    setToggleYes(!toggleYes)
    setToggleNo(false)
}

const handleToggleNo = function() {
    setToggleNo(!toggleNo)
    setToggleYes(false)
}

    return ( 
        <div>
        <p>As you continue along the path, though, you see lights ahead in the gloom of the forest. They are warm and look to be just out of easy shouting distance. The lights seem to be bobbing up and down gently, like someone carrying a torch. Could that be another person or people!?
        </p>
        <h3>Follow the lights or stay on the path?</h3>
        <div>
            {(toggleNo === false)?<GiTrail onClick={handleToggleNo} size='4rem'/>:<No/>}
            <p>===</p><GiShrug size='4rem'/><p>===</p>
            {(toggleYes === false)?<BsStars onClick={handleToggleYes} size='4rem'/>:<Yes/>}
        </div>
        </div>
     );
}

export default TheLights;