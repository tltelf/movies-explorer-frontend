import { SignUpIn } from '../SignUpIn/SignUpIn';

export const Login = ({ onLogin }) => {
  return (
    <SignUpIn
      title={'Рады видеть!'}
      buttonText={'Войти'}
      spanText={'Ещё не зарегистрированы?'}
      linkText={'Регистрация'}
      linkTo={'/signup'}
      onLogin={onLogin}
    />
  );
};
