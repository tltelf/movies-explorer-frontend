export const FilterCheckbox = ({ checkboxValue, handleCheckbox }) => {
  return (
    <div className='check-box__container'>
      <input
        className='check-box__input'
        defaultChecked={checkboxValue}
        type='checkbox'
        id='checkbox'
        onClick={handleCheckbox}
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
