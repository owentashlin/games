import React from "react";
import {useState, useEffect} from 'react'
import LightFire from "./LightFire"
import FindWater from "./FindWater"

function TheBeach() {
const [chooseFire, setChooseFire] = useState(null)
const [chooseWater, setChooseWater] = useState(null)


const handleClickFire = function() {
    setChooseFire(true)
    setChooseWater(false)
}

const handleClickWater = function() {
    setChooseWater(current => !current)
    setChooseFire(false)
}

    return ( 
        <div>
        <p>You wake up with the feeling of warm sand beneath you. You can feel the sun beating down on your back, and gentle waves lap at your feet and legs. You open your eyes and blink, raising your head to look around. You see you are on a beach, and as you look around you can see the wreckage of a ship washed ashore all around you. You remember then, the storm,the ship going down with you still on board, the desperate swim for what looked like land, the flash of lightning and the waves, then black.</p>
        <p>You lick your lips as you lever yourself upright, trying to get your bearings.</p>

        <p>You need water, and as you shade your eyes from the sun, you realize you need shade as well. Looking farther up the beach away from the sea, you can see a dense line of jungle and what looks like it might be a path leading deeper in.</p>

        <p>Looking back out to sea, you wonder if anyone is coming to rescue you. Should you wait here and try to light a signal fire or head into the jungle and try to find water? You can't forget either, you came here on a mission, find the treasure!</p>

        <h3>Stay and wait for rescue or go look for water?</h3>

        || <button onClick={handleClickFire}>light a fire</button> |
        {chooseFire && (<LightFire/>)}
            
         | <button onClick={handleClickWater}>search for water</button> ||  
        {chooseWater && (<FindWater/>)}
        </div>
     );
}

export default TheBeach;