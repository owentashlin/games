import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Games from './Pages/Games'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/games' element={<Games/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
