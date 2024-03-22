import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

type NavType = { name: string; route: string };

interface HeaderProps {
  height: number;
  backgroundColor?: string;
  nav?: NavType[];
  justifyContent?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const style: React.CSSProperties = {
    height: `${props.height}%`,
    backgroundColor: props.backgroundColor,
    justifyContent: props.justifyContent,
  };

  return (
    <header className="header" style={style}>
      {props.children}
      {props.nav && (
        <React.Fragment>
          <nav
            className="nav"
            style={showMenu ? { display: "flex", top: `${props.height}%` } : {}}
          >
            {props.nav.map((item, index) => (
              <Link key={index} to={item.route}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="nav-button" onClick={toggleMenu}>
            <div className="button-line"></div>
            <div className="button-line"></div>
            <div className="button-line"></div>
          </div>
        </React.Fragment>
      )}
    </header>
  );
};

export default Header;
