import { SignUpIn } from '../SignUpIn/SignUpIn';

export const Register = ({
  values,
  handleChange,
  errors,
  isValid,
  handleSubmitRegister,
  handleBlur,
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
      handleBlur={handleBlur}
      resetForm={resetForm}
      resError={resError}
      setResError={setResError}
    />
  );
};
