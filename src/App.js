
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Contact from './pages/Contact/Contact';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
