import {Link} from 'react-router-dom'
import './Games.css'
function Games() {
    return (
        <div className='games'>
        <h1>Games</h1>
        <Link to='/games/island'>The Mysterious Island</Link>
        </div>  
    )
}

export default Games;