import { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';

export function useProfileValidation(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const regexName = /^[A-Za-zА-Яа-я\s-]+$/;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === initialValue) {
      setError('Новое значение должно отличаться');
      setIsValid(false);
    } else if (value.trim() === '') {
      setError('Заполните это поле.');
      setIsValid(false);
    } else if (validations.isEmail && !isEmail(value)) {
      setError('Введите email, например: pochta@yandex.ru');
      setIsValid(false);
    } else if (validations.isName && !regexName.test(value)) {
      setError(
        'Имя может содержать только латиницу, кириллицу, пробел или дефис.'
      );
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  }, [value]);

  return {
    value,
    error,
    setError,
    isValid,
    onChange,
  };
}
