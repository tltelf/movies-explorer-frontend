import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/header__logo.svg';
import { useEffect } from 'react';

export const SignUpIn = ({
  title,
  buttonText,
  spanText,
  linkTo,
  linkText,
  values,
  handleChange,
  errors,
  isValid,
  handleSubmit,
  handleBlur,
  resetForm,
  resError,
  setResError,
}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/signin';

  useEffect(() => {
    resetForm();
    setResError('');
  }, []);

  const handleFocus = () => {
    setResError('');
  };

  return (
    <main className='sign-up-in'>
      <div className='sign-up-in__container'>
        <Link to='/'>
          <img className='sign-up-in__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='sign-up-in__title'>{title}</h2>

        <form
          className='sign-up-in__form'
          onSubmit={handleSubmit}
          // onBlur={handleBlur}
          onFocus={handleFocus}
        >
          {!isLoginPage && (
            <>
              <label className='sign-up-in__form-label' htmlFor='name'>
                Имя
                {errors.name && (
                  <span className='sign-up-in__form-error'>{errors.name}</span>
                )}
              </label>
              <input
                className='sign-up-in__form-input'
                type='text'
                id='name'
                name='name'
                placeholder='Виталий'
                value={values.name || ''}
                onChange={handleChange}
                pattern='^[A-Za-zА-Яа-я\s\-]+$'
                title='Имя может содержать только латиницу, кириллицу, пробел или дефис.'
                required
              />
            </>
          )}

          <label className='sign-up-in__form-label' htmlFor='email'>
            E-mail
            {errors.email && (
              <span className='sign-up-in__form-error'>{errors.email}</span>
            )}
          </label>
          <input
            className='sign-up-in__form-input'
            type='text'
            id='email'
            name='email'
            placeholder='pochta@yandex.ru'
            value={values.email || ''}
            onChange={handleChange}
            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            required
          />

          <label className='sign-up-in__form-label' htmlFor='password'>
            Пароль
            {errors.password && (
              <span className='sign-up-in__form-error'>{errors.password}</span>
            )}
          </label>
          <input
            className='sign-up-in__form-input'
            type='password'
            id='password'
            name='password'
            placeholder='Введите пароль'
            value={values.password || ''}
            onChange={handleChange}
            required
          />

          {resError && (
            <span
              className={`sign-up-in__form-error-response ${
                isLoginPage
                  ? 'sign-up-in__form-error-response_login'
                  : 'sign-up-in__form-error-response_register'
              }`}
            >
              {resError}
            </span>
          )}
          <button
            className={`sign-up-in__form-button ${
              !isValid || resError ? 'sign-up-in__form-button_disabled' : ''
            } ${
              isLoginPage
                ? 'sign-up-in__form-button_login'
                : 'sign-up-in__form-button_register'
            }`}
            type='submit'
            disabled={!isValid || resError}
          >
            {buttonText}
          </button>
        </form>

        <span
          className={`sign-up-in__text ${
            isLoginPage ? 'sign-up-in__text_login' : 'sign-up-in__text_register'
          }`}
        >
          {spanText}
        </span>
        <Link className='sign-up-in__link' to={linkTo}>
          {linkText}
        </Link>
      </div>
    </main>
  );
};
