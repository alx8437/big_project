import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from 'app/provider/ThemeProvider/lib/useTheme'
import {Suspense} from 'react';
import { AboutPage } from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";
import './styles/index.scss';
import {classnames} from "helpers/classnames/classNames";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;