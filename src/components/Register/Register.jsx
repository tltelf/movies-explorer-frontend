import { SignUpIn } from '../SignUpIn/SignUpIn';

export const Register = ({
  values,
  handleChange,
  errors,
  isValid,
  handleSubmitRegister,
  resetForm,
  resError,
  setResError,
}) => {
  return (
    <SignUpIn
      values={values}
      handleChange={handleChange}
      errors={errors}
      isValid={isValid}
      title={'Добро пожаловать!'}
      buttonText={'Зарегистрироваться'}
      spanText={'Уже зарегистрированы?'}
      linkText={'Войти'}
      linkTo={'/signin'}
      handleSubmit={handleSubmitRegister}
      resetForm={resetForm}
      resError={resError}
      setResError={setResError}
    />
  );
};
