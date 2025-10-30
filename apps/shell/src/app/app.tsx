import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import { useCharactersContext } from '@hagamos-un-microfrontend/shared';

const Characters = React.lazy(() => import('characters/Module'));
const Home = React.lazy(() => import('home/Module'));

export function App() {
  // const {characters} = useCharactersContext();

  return (
    <React.Suspense fallback={
      <div>
        Cargando...
      </div>
    }>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
