import {Link} from 'react-router-dom'

function No() {
    return ( 
        <>
        <p>You pause and watch the lights for a time, but after being mesmerized by their dance, you blink awake and find that you have walked several paces off the path without realizing it. You quickly turn back, thinking to yourself that you don’t know what those lights are but you don’t like the look of them.</p> 

        <p>You see them a few more times as you walk along the trail, but each time they are just a little to far away. One time you could swear you hear singing or speaking as well, but just out of hearing range to be able to make out what they are saying. You shake your head and do your best to ignore it, vowing to stay on the path. Its got to go somewhere, right?</p>
        
        <button className='next'><Link className='link' to="/games/island/hollow">Next: The Hollow</Link></button>
        </>
     );
}

export default No;