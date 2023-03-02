import { Link } from 'react-router-dom'
import {GiAnvilImpact} from 'react-icons/gi'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './NavBar.css'

function NavBar() {
  
    return (
    <>
      <nav> 
        <div className='nav-list'>
        <Link className='nav-link' to='/'>Home</Link>
        <a href='https://owentashlin.netlify.app/'><IoIosArrowBack size='30px'/><GiAnvilImpact size='35px'/><IoIosArrowForward size='30px'/></a>
        <Link className='nav-link' to='/games'>Games</Link>
        </div>
      </nav> 
    </> 
  )
}

export default NavBar

