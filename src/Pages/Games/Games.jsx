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
        <Link to='/games/island'>The Mysterious Island</Link>

        <h3><strong>Arcade Style</strong></h3>
        <a href='https://owentashlin.github.io/GA--project-1-Simon/'>Simon</a>
        </div>  
        </>
    )
}

export default Games;