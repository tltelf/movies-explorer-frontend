export const Profile = ({ onLogout }) => {
  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form' action=''>
        <label className='profile__form-label' htmlFor='name'>
          <span className='profile__form-text'>Имя</span>
          <input
            className='profile__form-input'
            type='text'
            id='name'
            defaultValue={'Виталий'}
          />
        </label>
        <div className='profile__form-decor'></div>
        <label className='profile__form-label' htmlFor='email'>
          <span className='profile__form-text'>E-mail</span>
          <input
            className='profile__form-input'
            type='text'
            id='email'
            defaultValue={'pochta@yandex.ru'}
          />
        </label>
        <button className='profile__form-button' type='button'>
          Редактировать
        </button>
        <button
          className='profile__form-button'
          onClick={onLogout}
          type='button'
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
};
