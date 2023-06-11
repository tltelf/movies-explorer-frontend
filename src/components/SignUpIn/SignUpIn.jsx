import { Link, useLocation } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import logo from '../../images/header__logo.svg';

export const SignUpIn = ({
  title,
  buttonText,
  spanText,
  linkTo,
  linkText,
  onLogin,
}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/signin';

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    resetForm();
  };

  return (
    <main className='sign-up-in'>
      <Link to='/'>
        <img className='sign-up-in__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='sign-up-in__title'>{title}</h2>

      <form className='sign-up-in__form' onSubmit={handleSubmit}>
        {!isLoginPage && (
          <>
            <label className='sign-up-in__form-label' htmlFor='name'>
              Имя
            </label>
            <input
              className='sign-up-in__form-input'
              type='text'
              id='name'
              name='name'
              placeholder='Виталий'
              value={values.name || ''}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <span className='sign-up-in__form-error'>{errors.name}</span>
            )}
          </>
        )}

        <label className='sign-up-in__form-label' htmlFor='email'>
          E-mail
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
        {errors.email && (
          <span className='sign-up-in__form-error'>{errors.email}</span>
        )}

        <label className='sign-up-in__form-label' htmlFor='password'>
          Пароль
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
        {errors.password && (
          <span className='sign-up-in__form-error'>{errors.password}</span>
        )}

        <button
          className={`sign-up-in__form-button ${
            isLoginPage
              ? 'sign-up-in__form-button_login'
              : 'sign-up-in__form-button_register'
          }`}
          onClick={onLogin}
          type='submit'
          disabled={!isValid}
        >
          {buttonText}
        </button>
      </form>

      <div className='sign-up-in__container'>
        <span className='sign-up-in__text'>{spanText}</span>
        <Link className='sign-up-in__link' to={linkTo}>
          {linkText}
        </Link>
      </div>
    </main>
  );
};
