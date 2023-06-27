import { SignUpIn } from '../SignUpIn/SignUpIn';

export const Login = ({
  values,
  handleChange,
  errors,
  isValid,
  onLogin,
  handleSubmitAuth,
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
      title={'Рады видеть!'}
      buttonText={'Войти'}
      spanText={'Ещё не зарегистрированы?'}
      linkText={'Регистрация'}
      linkTo={'/signup'}
      onLogin={onLogin}
      handleSubmit={handleSubmitAuth}
      resetForm={resetForm}
      resError={resError}
      setResError={setResError}
    />
  );
};
