import { Section } from '../../Section/Section';

export const AboutProject = () => {
  return (
    <Section
      title={'О проекте'}
      classNameContainer={'section__container_about-project'}
    >
      <div className='about__container'>
        <h2 className='about__title'>Дипломный проект включал 5 этапов</h2>
        <p className='about__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className='about__title about__title_second'>
          На выполнение диплома ушло 5 недель
        </h2>
        <p className='about__text about__text_second'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        <div className='about__info-container'>
          <span className='about__info'>1 неделя</span>
          <span className='about__info about__info_second'>4 недели</span>
        </div>
        <span className='about__info-way'>Back-end</span>
        <span className='about__info-way about__info-way_second'>
          Front-end
        </span>
      </div>
    </Section>
  );
};
