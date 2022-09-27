
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
