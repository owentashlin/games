import {Link} from 'react-router-dom'

function Down() {
    return (
        <>
        <p>It may look sketchy, but you reason that settlements are generally in valleys not on the top of hills, right? People build their houses by water, and water flows downhill not up. So, even though the fog is getting thick, and the sun is getting low on the horizon, you turn toward the left and head down into the valley.</p>

        <p>The fog on the ground is thick here, so thick that you have to be careful where you step because you can’t really see your feet. You try to stay with the path, which luckily has broadened here into something that almost looks like a real road. Sometimes, when there is a lifting of the fog, you see what almost looks like paving stones beneath your feet. They are broad and smooth, and have deep grooves worn down in places with greenery poking through cracks and breaks in other spots.</p>

        <button className='next'><Link className='link' to='/games/island/stones'>Next: The Stones</Link></button>
        </>
     );
}

export default Down;