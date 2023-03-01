import {Link} from 'react-router-dom'
import {GiDrowning} from 'react-icons/gi'

function Yes() {
    return ( 
        <>
        <p>You can’t help it, the prospect of other people is too good to pass up. You leave the trail and try to follow the weaving bobbing lights. As you walk farther and farther from the path, you call out to them hoping whoever they are will stop and wait for you. But they are always just a little to far. Finally, you stop, looking around you and realize you are completely lost. You have no idea how to get back to the path or the beach now. As you look down, thinking to try to retrace your steps, you see that the ground here is suspiciously soft and muddy. As you watch, your footsteps fill with water and sink away out of sight. You look back along your own trail and see no trace of where you came from.</p>

        <p>As you stand, trying to think of something to do to get back to something you recognize you see the lights again. This time they are right in front of you. You reach out, calling out to them but they wink and float and you stand mesmerized watching their silent dance. Eventually you blink awake and try to take a step back. Its only then that you realize that you have sunk up to your waist in sticky mud, and you’re still sinking and fast.</p> 
        
        <p>The forest is silent around you as you sink below the surface, the mysterious lights still bobbing and weaving between the silent trunks of the great forest giants.</p>

        <p><strong>You Have Drowned</strong></p>
        <p><GiDrowning size='4rem'/></p>
        <button className='next'><Link className='link' to="/games/island">Start Over?</Link></button>
        </>
     );
}

export default Yes;