import {GiAnvilImpact} from 'react-icons/gi'

function Home() {
    return(
        <div>
            <h1>Welcome to Owen's Workshop!</h1>
            <p className='home-text'>Here you will find a fun group of silly little games that took up way to much brain space while they were being crafted.</p>
            <p>Hope you like them!</p>
            <p className='home-image'><GiAnvilImpact size='40rem' color='#f5f5f5'/></p>
        </div>
    )
}

export default Home