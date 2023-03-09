import {useTheme} from 'app/provider/ThemeProvider/lib/useTheme'
import {classnames} from "shared/lib/classnames/classNames";
import {AppRouter} from "app/provider/router";
import './styles/index.scss';
import {Navbar} from "widgets/Navbar";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <Navbar />
      <div>
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;