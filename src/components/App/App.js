import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { LikesProvider } from '../../contexts/LikesContext';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
// import { ProtectedRoute } from '../ProtectedRoute';

import { Layout } from '../Layout/Layout';

function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') === 'true'
  );
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
    navigate('/movies');
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', false);
    navigate('/');
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AuthContext.Provider value={isAuth}>
      <LikesProvider>
        <Routes>
          <Route path='/' element={<Layout screenSize={screenSize} />}>
            <Route index element={<Main />} />

            {/* На время проверки level-2 отключен ProtectedRoute, 
                который не пускает на страницы 
                Movies, SavedMovies и Profile без авторизации.
                
                Из-за этого на них можно попасть до авторизации.
                Там будет отображен Header со стилями
                со страницы Main без авторизации.
                Чтобы посмотреть все стили Header,
                нужно нажать " Войти ".

                В level-3, без авторизации будет невозможно попасть на эти страницы
                и Header со стилями из Main там не отобразится.
                */}

            {/* <Route element={<ProtectedRoute />}> */}
            <Route
              path='/movies'
              element={<Movies screenSize={screenSize} />}
            />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route
              path='/profile'
              element={<Profile onLogout={handleLogout} />}
            />
          </Route>
          {/* </Route> */}
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </LikesProvider>
    </AuthContext.Provider>
  );
}

export default App;
