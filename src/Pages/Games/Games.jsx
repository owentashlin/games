import {Link} from 'react-router-dom'
import {GiAnvilImpact} from 'react-icons/gi'

import './Games.css'
function Games() {
    return (
        <>
        <div className='games'>
        <h1>Owen's Games</h1>
        <div className='home-image'><GiAnvilImpact size='50rem' color='#f5f5f5'/></div>
        <h3><strong>Text Adventures</strong></h3>
        <Link className='game-link' to='/games/island'>The Mysterious Island</Link>
        <p className='game-blurb'>You wake up on the shore of a tropical island, your ship having gone down in a storm. You have a choice, stay and wait for rescue or go exploring and maybe find the treasure rumored to be hidden somewhere on the island. What will you do?</p>

        <h3><strong>Arcade Style</strong></h3>
        <a href='https://owentashlin.github.io/GA--project-1-Simon/'>Simon</a>
        <a href='https://owentashlin.github.io/tetris/'>Tetris</a>
        
        </div>  
        </>
    )
}

export default Games;