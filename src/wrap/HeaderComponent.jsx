import React from 'react';
import './css/header.scss';
import { Outlet } from 'react-router-dom';

export default function HeaderComponent() {
  const headerFix = React.useRef();
  const [state, setState] = React.useState({
    isFixed: false,
  });

  React.useEffect(() => {
    let headerHeight = headerFix.current.offsetTop + 79;
    let isFixed = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY >= headerHeight) {
        isFixed = true;
      } else {
        isFixed = false;
      }
      setState({
        ...state,
        isFixed: isFixed,
      });
    });
  }, []);

  const onClickReset = () => {};

  return (
    <>
      <header
        id="header"
        className={state.isFixed ? 'fixed' : ''}
        ref={headerFix}
      >
        <div className="container">
          <div className="top">
            <div className="myName">
              <h1 onClick={onClickReset}>SungJae Gwon</h1>
            </div>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#introduce">Introduce</a>
                </li>
                <li>
                  <a href="#aboutme">About Me</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
