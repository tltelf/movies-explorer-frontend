import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { ProtectedRoute } from '../ProtectedRoute';
import { Layout } from '../Layout/Layout';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { filterMovies } from '../../utils/filter';
import { getMovies } from '../../utils/MoviesApi';
import {
  likeFilm,
  dislikeFilm,
  getFilms,
  signUp,
  signIn,
  getUserInfo,
} from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const { values, handleChange, errors, isValid, resetForm, handleBlur } =
    useFormWithValidation(currentUser);
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  const [isLoading, setIsLoading] = useState(false);
  const [resError, setResError] = useState('');
  const [resErrorMovies, setResErrorMovies] = useState(false);
  const [errorSearchForm, setErrorSearchForm] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [likedCards, setLikedCards] = useState([]);
  const [filteredLikedMovies, setFilteredLikedMovies] = useState([]);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('token') ? true : false
  );
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem('allMovies')) || []
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );
  const [searchText, setSearchText] = useState(
    JSON.parse(localStorage.getItem('searchText')) || ''
  );
  const [checkboxValue, setCheckBoxValue] = useState(
    JSON.parse(localStorage.getItem('checkboxValue')) || false
  );

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    signUp(values.name, values.email, values.password)
      .then(() => signIn(values.email, values.password))
      .then((res) => {
        if (res.token) {
          resetForm();
          handleLogin();
          navigate('/movies', { replace: true });
        } else {
          setResError('Ошибка при регистрации');
        }
      })
      .catch((err) => {
        setResError(err.message);
      });
  };

  const handleSubmitAuth = (e) => {
    e.preventDefault();
    signIn(values.email, values.password)
      .then((res) => {
        if (res.token) {
          resetForm();
          handleLogin();
          navigate('/movies', { replace: true });
        } else {
          setResError('Ошибка при регистрации');
        }
      })
      .catch((err) => {
        setResError(err.message);
      });
  };

  const handleSubmitSearchForm = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setErrorSearchForm(true);
    } else {
      setResErrorMovies(false);
      setIsLoading(true);
      try {
        if (allMovies.length === 0) {
          const moviesData = await getMovies();
          setSearchText(values.search);
          setAllMovies(moviesData);
          filterMovies(
            moviesData,
            values.search,
            likedCards,
            setFilteredMovies,
            setFilteredLikedMovies,
            checkboxValue,
            isMoviesPage
          );
        } else {
          setSearchText(values.search);
          filterMovies(
            allMovies,
            values.search,
            likedCards,
            setFilteredMovies,
            setFilteredLikedMovies,
            checkboxValue,
            isMoviesPage
          );
        }
      } catch (err) {
        setResErrorMovies(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setFilteredMovies([]);
    setAllMovies([]);
    setSearchText('');
    setCurrentUser({});
    localStorage.clear();
    navigate('/');
  };

  const addLikedCard = (card) => {
    const token = localStorage.getItem('token');
    likeFilm(
      {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co/${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      },
      token
    ).then((film) => {
      setFilteredMovies((prevMovies) => {
        const updatedMovies = prevMovies.map((movie) => {
          if (movie.id === film.movieId) {
            return film;
          }
          return movie;
        });
        return updatedMovies;
      });
      setLikedCards((prevLikedCards) => [...prevLikedCards, film]);
      setFilteredLikedMovies((prevLikedCards) => [...prevLikedCards, film]);
    });
  };

  const removeLikedCard = (card) => {
    const token = localStorage.getItem('token');
    dislikeFilm(card._id, token);
    const prevMovie = allMovies.find((movie) => movie.id === card.movieId);
    setFilteredMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) => {
        if (movie.movieId === prevMovie.id) {
          return prevMovie;
        }
        return movie;
      });
      return updatedMovies;
    });
    setLikedCards((prevLikedCards) =>
      prevLikedCards.filter((c) => c.movieId !== card.movieId)
    );
    setFilteredLikedMovies((prevLikedCards) =>
      prevLikedCards.filter((c) => c.movieId !== card.movieId)
    );
  };

  const handleCheckbox = () => {
    setCheckBoxValue(!checkboxValue);

    filterMovies(
      allMovies,
      searchText,
      likedCards,
      setFilteredMovies,
      setFilteredLikedMovies,
      !checkboxValue,
      isMoviesPage
    );
  };

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setScreenSize(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([getFilms(token), getUserInfo(token)])
        .then(([films, info]) => {
          setLikedCards(films);
          filterMovies(
            allMovies,
            searchText,
            films,
            setFilteredMovies,
            setFilteredLikedMovies,
            checkboxValue,
            isMoviesPage
          );
          setCurrentUser(info);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isAuth]);

  useEffect(() => {
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
  }, [allMovies]);

  useEffect(() => {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
    localStorage.setItem('searchText', JSON.stringify(searchText));
  }, [searchText]);

  useEffect(() => {
    localStorage.setItem('checkboxValue', JSON.stringify(checkboxValue));
  }, [checkboxValue]);

  return (
    <CurrentUserContext.Provider value={{ isAuth, currentUser }}>
      <Routes>
        <Route path='/' element={<Layout screenSize={screenSize} />}>
          <Route index element={<Main />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path='/movies'
              element={
                <Movies
                  screenSize={screenSize}
                  likedCards={likedCards}
                  addLikedCard={addLikedCard}
                  removeLikedCard={removeLikedCard}
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  searchText={searchText}
                  checkboxValue={checkboxValue}
                  handleCheckbox={handleCheckbox}
                  allMovies={allMovies}
                  isLoading={isLoading}
                  isMoviesPage={isMoviesPage}
                  filteredLikedMovies={filteredLikedMovies}
                  setFilteredLikedMovies={setFilteredLikedMovies}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  handleSubmitSearchForm={handleSubmitSearchForm}
                  handleBlur={handleBlur}
                  errorSearchForm={errorSearchForm}
                  setErrorSearchForm={setErrorSearchForm}
                  resErrorMovies={resErrorMovies}
                  setResErrorMovies={setResErrorMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <SavedMovies
                  likedCards={likedCards}
                  addLikedCard={addLikedCard}
                  removeLikedCard={removeLikedCard}
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  searchText={searchText}
                  checkboxValue={checkboxValue}
                  handleCheckbox={handleCheckbox}
                  allMovies={allMovies}
                  isLoading={isLoading}
                  filteredLikedMovies={filteredLikedMovies}
                  setFilteredLikedMovies={setFilteredLikedMovies}
                  isMoviesPage={isMoviesPage}
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  handleSubmitSearchForm={handleSubmitSearchForm}
                  handleBlur={handleBlur}
                  errorSearchForm={errorSearchForm}
                  setErrorSearchForm={setErrorSearchForm}
                  resErrorMovies={resErrorMovies}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <Profile
                  onLogout={handleLogout}
                  buttonIsActive={buttonIsActive}
                  setButtonIsActive={setButtonIsActive}
                  resError={resError}
                  setResError={setResError}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          </Route>
        </Route>
        <Route element={<ProtectedRoute isSignUpIn={true} />}>
          <Route
            path='/signup'
            element={
              <Register
                values={values}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
                resetForm={resetForm}
                handleBlur={handleBlur}
                handleSubmitRegister={handleSubmitRegister}
                resError={resError}
                setResError={setResError}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                onLogin={handleLogin}
                values={values}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
                resetForm={resetForm}
                handleBlur={handleBlur}
                handleSubmitAuth={handleSubmitAuth}
                resError={resError}
                setResError={setResError}
              />
            }
          />
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
