import { Section } from '../../Section/Section';
import arrow from '../../../images/portfolio__img-link.svg';

export const Portfolio = () => {
	return (
		<Section
			title={'Портфолио'}
			className={'section_portfolio'}
			classNameContainer={'section__container_portfolio'}
			classNameTitle={'section__title_portfolio'}
		>
			<ul className='portfolio__list'>
				<li className='portfolio__cell'>
					<a
						target='_blank'
						href='https://tltelf.github.io/russian-travel/'
						rel='noopener noreferrer'
						className='portfolio__link'
					>
						<span>Статичный сайт</span>
						<img
							src={arrow}
							alt='Стрелка'
							className='portfolio__img-link'
						/>
					</a>
				</li>
				<li className='portfolio__cell'>
					<a
						target='_blank'
						href='https://portfolio-2-eta-orcin.vercel.app/'
						rel='noopener noreferrer'
						className='portfolio__link'
					>
						<span>Адаптивный сайт</span>
						<img
							src={arrow}
							alt='Стрелка'
							className='portfolio__img-link'
						/>
					</a>
				</li>
				<li className='portfolio__cell'>
					<a
						target='_blank'
						href='https://movies-explorer-frontend-umber.vercel.app/'
						rel='noopener noreferrer'
						className='portfolio__link'
					>
						<span>Одностраничное приложение</span>
						<img
							src={arrow}
							alt='Стрелка'
							className='portfolio__img-link'
						/>
					</a>
				</li>
			</ul>
		</Section>
	);
};
