import {Link} from 'react-router-dom'

function FindWater() {
    return ( 
    <div style={{margin:'20px', paddingTop:'1px', paddingBottom:'15px', paddingLeft:'2px', paddingRight:'2px'}}>
    <p>You decide you can't wait any longer, you need to try to find water. You head for the break in the foliage, hoping it might be a path and pleased when you see you were right. As you push through the greenery, you see an old path through the undergrowth winding ahead of you. You can hear birds in the trees above you and as the leaves close behind you, you are enveloped by the warm moist air beneath the canopy. It's only marginally cooler than the beach, but at least the sun isn't beating down on you anymore.</p>

    <p>You think you can hear running water up ahead. As you walk, you see a small stream. You bend down and cup you hands in the cold water, washing your face and hands, and drinking as much as you can since you don’t know when the next time you will find water is.</p>

   <button className='next'><Link className='link' to='/games/island/path'>Next:The Path</Link></button>
</div> )
}

export default FindWater;