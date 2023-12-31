import { Section } from '../../Section/Section';

export const Techs = () => {
  return (
    <Section
      title={'Технологии'}
      className={'section_techs'}
      classNameContainer={'section__container_techs'}
    >
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__list-cell'>HTML</li>
        <li className='techs__list-cell'>CSS</li>
        <li className='techs__list-cell'>JS</li>
        <li className='techs__list-cell'>React</li>
        <li className='techs__list-cell'>Git</li>
        <li className='techs__list-cell'>Express.js</li>
        <li className='techs__list-cell'>mongoDB</li>
      </ul>
    </Section>
  );
};
