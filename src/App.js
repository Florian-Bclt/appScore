import { Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import NewGame from './pages/newGame/NewGame'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/new-game' element={<NewGame />} />

      </Routes>
    </>
  );
}

export default App;
