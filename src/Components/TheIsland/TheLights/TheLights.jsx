import {useState} from 'react'
import No from './No'
import Yes from './Yes'

function TheLights() {
const [chooseNo, setChooseNo] = useState(null)
const [chooseYes, setChooseYes] = useState(null)

const handleClickYes = function() {
    setChooseYes(true)
    setChooseNo(false)
}

const handleClickNo = function() {
    setChooseNo(true)
    setChooseYes(false)
}

    return ( 
        <div>
        <p>As you continue along the path, though, you see lights ahead in the gloom of the forest. They are warm and look to be just out of easy shouting distance. The lights seem to be bobbing up and down gently, like someone carrying a torch. Could that be another person or people!?
        </p>
        <h3>Follow the lights?</h3>
        <button onClick={handleClickNo}>yes</button>
        {chooseNo && (<Yes/>)}
        <br></br>
        <button onClick={handleClickYes}>no</button>
        {chooseYes && (<No/>)}
        </div>
     );
}

export default TheLights;