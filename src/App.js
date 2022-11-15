
import React, { Suspense } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Loading from './components/Loading/Loading';

const Game = React.lazy(() => import('./pages/Game/Game'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));

function App() {
  return (
    <div className={classes.App}>
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
