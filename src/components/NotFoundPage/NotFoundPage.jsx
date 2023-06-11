import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main className='notfound'>
      <h2 className='notfound__title'>404</h2>
      <p className='notfound__text'>Страница не найдена</p>
      <button className='notfound__button' onClick={goBack}>
        Назад
      </button>
    </main>
  );
};
