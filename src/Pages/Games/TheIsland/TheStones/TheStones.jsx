import {useState} from 'react'
import GoBack from './GoBack'
import Explore from './Explore'
import {GiAncientRuins, GiShrug, GiArrowDunk, GiHeavenGate} from 'react-icons/gi'

function TheStones() {
const [toggleGoBack, setToggleGoBack] = useState(false)
const [toggleExplore, setToggleExplore] = useState(false)

const handleToggleGoBack = function() {
    setToggleGoBack(!toggleGoBack)
    setToggleExplore(false)
    document.getElementById("explore").disabled = true
}

const handleToggleExplore = function() {
    setToggleExplore(!toggleExplore)
    setToggleGoBack(false)
    document.getElementById("go-back").disabled = true
}

    return ( 
        <>
        <h1>The Mysterious Island</h1>
        <div className='games'>
        <h3>The Stones</h3>
        <p><GiHeavenGate size='4rem'/></p>
        <p>Following the road, you come to what looks like a pair of standing stones on either side of the path. The great grey stones are covered in moss and lichen, and one leans precariously to the side. When you look closer, you can see deep groves cut in swirling patterns on the stones that seem to hum and emit an eerie light when you get close. The path leads between them, standing as silent guardians for whatever lies beyond.</p>
        <div className='games'>
        <h3>Keep exploring or turn back?</h3>
        {(toggleGoBack === false)?<button id='go-back'><GiArrowDunk onClick={handleToggleGoBack} size="4rem"/></button>:<GoBack/>}

        <p><GiShrug size='4rem'/></p>

        {(toggleExplore === false)?<button id='explore'><GiAncientRuins onClick={handleToggleExplore} size="4rem"/></button>:<Explore/>}
        </div>
        </div>
        </>
     );
}

export default TheStones;

