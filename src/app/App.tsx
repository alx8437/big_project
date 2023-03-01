import {Link} from 'react-router-dom';
import {useTheme} from 'app/provider/ThemeProvider/lib/useTheme'
import {classnames} from "shared/lib/classnames/classNames";
import {AppRouter} from "app/provider/router";
import './styles/index.scss';

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;