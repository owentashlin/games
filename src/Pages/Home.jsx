import image from './avataaars.svg'

function Home() {
    return(
        <div className='home-view' >
            <h1>Welcome to Owen's Workshop!</h1>
            <p className='home-text'>Here you will find a fun group of silly little games that took up way to much brain space while they were being crafted. Hope you like them!
            </p>
            <br></br>
            <img src={image}
            alt='avatar'/>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home