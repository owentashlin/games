import {Link} from 'react-router-dom'
import {GiWaves} from 'react-icons/gi'

function GoBack() {
    return ( 
        <>
        <p>You retrace your steps back and find yourself back on the beach. Sighing and saying a few choice words, you see there are still no rescue ships in sight. Its almost night, better to rest and decide in the morning what to do next. Gathering wood for a fire, you make a small camp and curl up beside it, hoping to get some sleep. Hopefully the dawn will bring better prospects that today…</p>

        <p><strong>You find yourself back at The Beach</strong></p>
        <p><GiWaves size='4rem'/></p>
        <button className='next'><Link className='link' to="/games/island">Start Over?</Link></button>
        </>
     );
}

export default GoBack;