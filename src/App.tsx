import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import { Suspense, useState } from 'react';
import './styles/index.scss';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  return (
    <div className={`app ${theme}`}>
      <div>
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />}/>
          <Route path='/' element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;