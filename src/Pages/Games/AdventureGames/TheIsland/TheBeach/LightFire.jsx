function LightFire() {

    function refreshPage() {
        window.location.reload(false)
    }

    return ( 
        <div id='fire'>
            <p>You decide to wait by the beach and see if anyone is coming. You look back at the forbidding line of jungle and though you are hot and thirsty, you decide you can't take the risk of going in there and getting lost. You start to gather up what you can for fire wood, ship wreckage, coconut husks, whatever you can find. Once you have a nice big pile, you look for something you can try to light the fire with. You see an old oil lamp has washed ashore, with a little oil still at the bottom not fouled by sea water. You take it and see not much farther up the beach is some flinty stone. Good thing you remember your old scouting lessons!</p>

            <p>You take your finds back to your signal fire and manage to get it lit just as the sun is starting to set in the west. You wait and wait, but soon you realize that no one is coming. As dawn is breaking, your fire long since burned to embers, you look back into the jungle behind you and know you are on your own and will have to figure out a way to rescue yourself.</p>

            <button className="next" onClick={refreshPage}>Start Over?</button>
        </div>
     );
}

export default LightFire;