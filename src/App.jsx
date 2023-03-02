import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Games from './Pages/Games/Games'
import TheIsland from './Pages/Games/AdventureGames/TheIsland/TheIsland'
import ThePath from './Pages/Games/AdventureGames/TheIsland/ThePath/ThePath'
import TheLights from './Pages/Games/AdventureGames/TheIsland/TheLights/TheLights'
import TheHollow from './Pages/Games/AdventureGames/TheIsland/TheHollow/TheHollow'
import TheStones from './Pages/Games/AdventureGames/TheIsland/TheStones/TheStones'
import './App.css'
import TheTemple from './Pages/Games/AdventureGames/TheIsland/TheTemple/TheTemple'
import Simon from './Pages/Games/ArcadeGames/Simon/Simon'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/games' element={<Games/>}></Route>
        <Route path='/games/island' element={<TheIsland/>}></Route>
        <Route path='/games/island/path' element={<ThePath/>}></Route>
        <Route path='/games/island/lights' element={<TheLights/>}></Route>
        <Route path='/games/island/hollow' element={<TheHollow/>}></Route>
        <Route path='/games/island/lights' element={<TheLights/>}></Route>
        <Route path='/games/island/stones' element={<TheStones/>}></Route>
        <Route path='/games/island/temple' element={<TheTemple/>}></Route>
        <Route path='games/simon' element={<Simon/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
