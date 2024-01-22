import { Section } from '../../Section/Section';
import avatar from '../../../images/about-me__img.jpg';

export const AboutMe = () => {
	return (
		<Section
			title={'Студент'}
			className={'section_about-me'}
			classNameContainer={'section__container_about-me'}
		>
			<div className='about-me__container'>
				<h2 className='about-me__title'>Марк</h2>
				<p className='about-me__subtitle'>
					Фронтенд-разработчик, 27 лет
				</p>
				<p className='about-me__text'>
					Я родился и живу в Тольятти. Я люблю слушать музыку, а ещё
					увлекаюсь бегом. Недавно начал кодить. С 2018 года работал в
					компании «Adidas». После того, как прошёл курс по
					веб‑разработке, занялся поиском работы.
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
