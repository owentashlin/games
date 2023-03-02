import {Link} from 'react-router-dom'

function TurnRight() {
    return ( 
        <>
        <p>
        Despite the overgrown look of the path, you to take the right hand fork. You continue up the path as it follows the stream, looping back and forth along the bubbling little brook. You are beginning to fear that this isn’t a true path, and maybe just a game trail. You had hoped this might lead to some sort of village or town where you might be able to get some help. Now you aren’t so sure…</p>

        <button className='next'><Link className='link' to='/games/island/lights'>Next: The Lights</Link></button>
        </>
     );
}

export default TurnRight;