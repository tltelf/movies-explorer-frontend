import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <footer className={`footer${isProfilePage ? ' footer__profile' : ''}`}>
      <div className='footer__container'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <nav className='footer__navigation'>
          <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
          <ul className='footer__links'>
            <li>
              <a
                target='_blank'
                href='https://practicum.yandex.ru/'
                rel='noopener noreferrer'
                className='footer__link'
              >
                <span className='footer__link-text'>Яндекс.Практикум</span>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://github.com/'
                rel='noopener noreferrer'
                className='footer__link'
              >
                <span className='footer__link-text'>Github</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
