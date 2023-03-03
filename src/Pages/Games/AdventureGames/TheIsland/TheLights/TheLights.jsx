import {useState} from 'react'
import No from './No'
import Yes from './Yes'
import {BsStars} from 'react-icons/bs'
import {GiTrail, GiShrug} from 'react-icons/gi'
import {WiStars} from 'react-icons/wi'
import image from "../../images/Fireflies.png";

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
        <div>
            <h1>The Mysterious Island</h1>

            <div 
                className='games'
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
            >
        <div style={{ background: "white", opacity: "80%", padding: '5px' }}> 
        <p>
            <WiStars size='5rem'/>
        </p>
        <h3>The Lights</h3>
        <div style={{ margin: "5px", padding: "5px" }}>
        <p>
            As you continue along the path, though, you see lights ahead in the gloom of the forest. They are warm and look to be just out of easy shouting distance. The lights seem to be bobbing up and down gently, like someone carrying a torch. Could that be another person or people!?
            </p>
        </div>
        </div>
        <div className='games' style={{ background: "white", opacity: "80%" }}>
        <h3>Follow the lights or stay on the path?</h3>
            {(toggleNo === false)?<button id='no'><GiTrail onClick={handleToggleNo} size='4rem'/></button>:<No/>}
            <p>===</p><GiShrug size='4rem'/><p>===</p>
            {(toggleYes === false)?<button id='yes'><BsStars onClick={handleToggleYes} size='4rem'/></button>:<Yes/>}
        </div>
        </div>
        </div>
     );
}

export default TheLights;