import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Games from './Pages/Games/Games'
import TheIsland from './Pages/Games/TheIsland/TheIsland'
import ThePath from './Pages/Games/TheIsland/ThePath/ThePath'
import TheLights from './Pages/Games/TheIsland/TheLights/TheLights'
import TheHollow from './Pages/Games/TheIsland/TheHollow/TheHollow'
import TheStones from './Pages/Games/TheIsland/TheStones/TheStones'
import './App.css'
import TheTemple from './Pages/Games/TheIsland/TheTemple/TheTemple'

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  )
}

export default App;
