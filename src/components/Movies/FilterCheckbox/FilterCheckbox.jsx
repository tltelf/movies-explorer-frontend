export const FilterCheckbox = () => {
  return (
    <div className='check-box__container'>
      <input
        className='check-box__input'
        defaultChecked
        type='checkbox'
        id='checkbox'
      />
      <label className='check-box__label' htmlFor='checkbox'>
        <span className='check-box__button-tumb-circle'></span>
      </label>
      <label className='check-box__label-text' htmlFor='checkbox'>
        Короткометражки
      </label>
    </div>
  );
};
