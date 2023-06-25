import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import closeIcon from '../../images/close__icon.svg';
import logoButtonMainPage from '../../images/header__logo-button-main.svg';
import logoButton from '../../images/header__logo-button.svg';

export const Navigation = ({ isAuth, isMainPage, screenSize }) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return isAuth ? (
    screenSize < 769 ? (
      <>
        <button
          className={`nav__button-open-bar${
            isMainPage ? ' nav__button-open-bar_main-page' : ''
          }`}
          onClick={showSidebar}
        >
          <span
            className={`nav__button-open-bar-span${
              isMainPage ? ' nav__button-open-bar-span_main-page' : ''
            }`}
          ></span>
        </button>
        <nav
          className={sidebar ? 'nav nav_active' : 'nav'}
          onClick={showSidebar}
        >
          <ul className='nav__items' onClick={(e) => e.stopPropagation()}>
            <li className='nav__item nav__item_close-bar'>
              <button className='nav__button-close-bar'>
                <img
                  src={closeIcon}
                  alt='Иконка закрытия'
                  onClick={showSidebar}
                />
              </button>
            </li>
            <li className='nav__item' onClick={showSidebar}>
              <Link to='/' className='nav__link'>
                Главная
              </Link>
            </li>
            <li className='nav__item' onClick={showSidebar}>
              <Link to='/movies' className='nav__link'>
                Фильмы
              </Link>
            </li>
            <li className='nav__item' onClick={showSidebar}>
              <Link to='/saved-movies' className='nav__link'>
                Сохраненные фильмы
              </Link>
            </li>
            <li className='nav__item' onClick={showSidebar}>
              <button
                onClick={() => navigate('/profile')}
                className='nav__profile-button'
              >
                <span className='nav__profile-button-text'>Аккаунт</span>
                <div className='nav__profile-button-logo-container'>
                  <img
                    src={logoButton}
                    alt='Логотип кнопки профиля'
                    className='nav__profile-button-logo'
                  />
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </>
    ) : (
      <>
        <nav className='nav'>
          <ul className='nav__items'>
            <li className='nav__item'>
              <Link
                to='/movies'
                className={`nav__link${
                  isMainPage ? ' nav__link_main-page' : ''
                }`}
              >
                Фильмы
              </Link>
            </li>
            <li className='nav__item nav__item_saved-movie'>
              <Link
                to='/saved-movies'
                className={`nav__link${
                  isMainPage ? ' nav__link_main-page' : ''
                }`}
              >
                Сохранённые фильмы
              </Link>
            </li>
            <li className='nav__item'>
              <button
                onClick={() => navigate('/profile')}
                className='nav__profile-button'
              >
                <span
                  className={`nav__profile-button-text${
                    isMainPage ? ' nav__profile-button-text_main' : ''
                  }`}
                >
                  Аккаунт
                </span>
                <div
                  className={`nav__profile-button-logo-container${
                    isMainPage ? ' nav__profile-button-logo-container_main' : ''
                  }`}
                >
                  <img
                    src={isMainPage ? logoButtonMainPage : logoButton}
                    alt='Логотип кнопки профиля'
                    className={`nav__profile-button-logo${
                      isMainPage ? ' nav__profile-button-logo_main' : ''
                    }`}
                  />
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </>
    )
  ) : (
    <>
      <Link to='/signup' className='nav__link_unauth nav__link_unauth-register'>
        Регистрация
      </Link>
      <Link to='/signin' className='nav__link_unauth nav__link_unauth-login'>
        Войти
      </Link>
    </>
  );
};
