import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from 'app/provider/ThemeProvider/lib/useTheme'
import {Suspense} from 'react';
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import './styles/index.scss';

const App = () => {
  const { toggleTheme, theme } = useTheme();

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