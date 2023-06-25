import { Section } from '../../Section/Section';
import avatar from '../../../images/about-me__img.png';

export const AboutMe = () => {
  return (
    <Section
      title={'Студент'}
      className={'section_about-me'}
      classNameContainer={'section__container_about-me'}
    >
      <div className='about-me__container'>
        <h2 className='about-me__title'>Виталий</h2>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб‑разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          target='_blank'
          href='https://github.com/tltelf'
          rel='noopener noreferrer'
          className='about-me__link'
        >
          Github
        </a>
        <img src={avatar} alt='Аватар' className='about-me__avatar' />
      </div>
    </Section>
  );
};
