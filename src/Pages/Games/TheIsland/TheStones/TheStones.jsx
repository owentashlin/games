import {useState} from 'react'
import GoBack from './GoBack'
import Explore from './Explore'

function TheStones() {
const [chooseGoBack, setChooseGoBack] = useState(null)
const [chooseExplore, setChooseExplore] = useState(null)

const handleClickGoBack = function() {
    setChooseGoBack(current => !current)
    setChooseExplore(false)
}

const handleClickExplore = function() {
    setChooseExplore(current => !current)
    setChooseGoBack(false)
}

    return ( 
        <div className='games'>
        <p>Following the road, you come to what looks like a pair of standing stones on either side of the path. The great grey stones are covered in moss and lichen, and one leans precariously to the side. When you look closer, you can see deep groves cut in swirling patterns on the stones that seem to hum and emit an eerie light when you get close. The path leads between them, standing as silent guardians for whatever lies beyond.</p>

        <h3>Keep exploring or turn back?</h3>
        <button onClick={handleClickGoBack}>go back</button>
        {chooseGoBack && (<GoBack/>)}
        <br></br>
        <button onClick={handleClickExplore}>explore</button>
        {chooseExplore && (<Explore/>)}
        </div>
     );
}

export default TheStones;

