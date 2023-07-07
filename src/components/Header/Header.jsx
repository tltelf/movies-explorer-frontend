import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/header__logo.svg';

export const Header = ({ screenSize }) => {
  const location = useLocation();
  const { isAuth } = useContext(CurrentUserContext);

  const isMainPage = location.pathname === '/';

  return (
    <header className={`header${isMainPage ? ' header_view_action' : ''}`}>
      <div
        className={`header__container${
          isAuth ? '' : ' header__container_unauth'
        }`}
      >
        <Link className='header__link-logo' to='/'>
          <img src={logo} alt='Логотип' className='header__logo' />
        </Link>
        <Navigation
          isAuth={isAuth}
          isMainPage={isMainPage}
          screenSize={screenSize}
        />
      </div>
    </header>
  );
};
