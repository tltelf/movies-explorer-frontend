import { SignUpIn } from '../SignUpIn/SignUpIn';

export const Register = () => {
  return (
    <SignUpIn
      title={'Добро пожаловать!'}
      buttonText={'Зарегистрироваться'}
      spanText={'Уже зарегистрированы?'}
      linkText={'Войти'}
      linkTo={'/signin'}
    />
  );
};
