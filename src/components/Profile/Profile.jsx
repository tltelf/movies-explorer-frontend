import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useProfileValidation } from '../../hooks/useProfileValidation';
import { updateUserInfo } from '../../utils/MainApi';

export const Profile = ({
  onLogout,
  buttonIsActive,
  setButtonIsActive,
  resError,
  setResError,
  setCurrentUser,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const name = useProfileValidation(currentUser.name || '', { isName: true });
  const email = useProfileValidation(currentUser.email || '', {
    isEmail: true,
  });

  useEffect(() => {
    setResError('');
    name.setError('');
    email.setError('');
    setButtonIsActive(false);
  }, []);

  const handleEditButton = (e) => {
    e.preventDefault();
    setButtonIsActive(!buttonIsActive);
  };

  const handleFocus = () => {
    setResError('');
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    updateUserInfo({ email: email.value, name: name.value }, token)
      .then((res) => {
        setCurrentUser(res);
        setButtonIsActive(!buttonIsActive);
        setResError('Данные успешно обновлены!');
      })
      .catch((err) => {
        setResError(err.message);
      });
  };
  return (
    <div className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
      <form
        className='profile__form'
        onSubmit={handleSubmitProfile}
        onFocus={handleFocus}
      >
        <label className='profile__form-label' htmlFor='name'>
          <span className='profile__form-text'>Имя</span>
          <input
            className='profile__form-input'
            type='text'
            id='name'
            name='name'
            defaultValue={name.value || currentUser.name}
            onChange={name.onChange}
            pattern='^[A-Za-zА-Яа-я\s\-]+$'
            title='Имя может содержать только латиницу, кириллицу, пробел или дефис.'
            required
          />
          {name.error && (
            <span className='profile__form-error'>{name.error}</span>
          )}
        </label>
        <div className='profile__form-decor'></div>
        <label className='profile__form-label' htmlFor='email'>
          <span className='profile__form-text'>E-mail</span>
          <input
            className='profile__form-input'
            type='text'
            id='email'
            name='email'
            defaultValue={email.value || currentUser.email}
            onChange={email.onChange}
            required
          />
          {email.error && (
            <span className='profile__form-error'>{email.error}</span>
          )}
        </label>
        {resError && (
          <span className='profile__form-error-response'>{resError}</span>
        )}
        {!buttonIsActive ? (
          <>
            <button
              className={`profile__form-button${
                (!name.isValid && !email.isValid) || resError
                  ? ' profile__form-button_disabled'
                  : ''
              }`}
              type='button'
              disabled={(!name.isValid && !email.isValid) || resError}
              onClick={handleEditButton}
            >
              Редактировать
            </button>
            <button
              className='profile__form-button'
              onClick={onLogout}
              type='button'
            >
              Выйти из аккаунта
            </button>
          </>
        ) : (
          <button
            className='profile__form-save-button'
            type='submit'
            disabled={(!name.isValid && !email.isValid) || resError}
          >
            Сохранить
          </button>
        )}
      </form>
    </div>
  );
};
