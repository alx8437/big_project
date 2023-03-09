import {Link} from "react-router-dom";
import {classnames} from "shared/lib/classnames/classNames";
import { FC } from "react";
import styles from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar: FC<NavbarProps> = ({ classname }) => {
  return (
    <div className={classnames(styles.navbar, {} , [classname])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

