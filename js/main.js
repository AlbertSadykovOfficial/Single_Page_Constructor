const getElement = (tagName, classNames, attributes) => {
		const element = document.createElement(tagName);

		if (classNames)
		{
				// Добавить к элементу классы через перечислеие
				element.classList.add(...classNames);
		}

		if (attributes) 
		{
				for (const attribute in attributes) 
				{
						// Перенсим свойства из объекта в элемент
						element[attribute] = attributes[attribute];
				}
		}

		return element;
};

// Метод массивов - MAP
// MAP запускает callback функцию столько раз, 
// сколько внутри массива элементов (по очереди)
//
// Так, мы можем иттерировать по нашему объекту и получать подобъект объекта через (item)
//
// <a href="#" class="social-link"><img src="witcher/social/twitter.svg" alt="Twitter"></a>
const createHeader = ({title, header: { logo, social, menu, menuButton}}) => {
		const header = getElement('header');
		const container = getElement('div', ['container']);
		const wrapper = getElement('div', ['header']);

		// Проверяем наличие logo в объекте
		if (logo) 
		{

				const logoElem = getElement('img', ['logo'], {
						src: logo,
						alt: 'Логотип ' + title
				});

				logoElem.src = logo;
				logoElem.alt = 'Логотип ' + title;

				wrapper.append(logoElem);
		}

		if (menu) 
		{

				const nav = getElement('nav', ['menu-list']);

				const allMenuLinks = menu.map(item => {
						const menuLink = getElement('a', ['menu-link']);
						
						menuLink.href = item.link;
						menuLink.append(item.title);
						//console.dir(menuLink);
						
						return menuLink;
				});

				nav.append(...allMenuLinks); 	//console.log(allSocial);
				wrapper.append(nav);
		}

		if (social) 
		{

				const socialWapper = getElement('div', ['social']);

				const allSocial = social.map(item => {
						const socialLink = getElement('a', ['social-link']);
						
						socialLink.append(getElement('img', [], {
							src: item.image,
							alt: item.title
						}));
					
						socialLink.href = item.link;

						return socialLink;
				});
				
				socialWapper.append(...allSocial);
				wrapper.append(socialWapper);
		}

		if (menuButton)
		{
				const menuButton = getElement('button', ['menu-button']);

				menuButton.addEventListener('click', function () {
						document.querySelector('.menu-button').classList.toggle('menu-button-active');
						document.querySelector('.header').classList.toggle('header-active');
				});

				header.append(menuButton);
		}

		// Создаем элементы с нужными нам классами и засовываем 
		// их вовнутрь нужных нам элементов
		header.append(container);
		container.append(wrapper);

		return header;
};

//
// Диструктуризация свойства param
// Главное, что имя свойства обхекта совпадало с переменной
// const {title, main} = param;
// const {genre, raiting, description, trailer} = main;
// или сразу записать
// const {title, main: { genre, raiting, description, trailer }}
// или вообще в инициализации
// const createMain = ({title, main: { genre, raiting, description, trailer }}) {
// Тут будут переменные внутри main
//}
//console.log({title, main})
const createMain = ({title, main: { genre, rating, description, trailer, slider }}) => {

		const main = getElement('main');
		const container = getElement('div', ['container']);
		const wrapper = getElement('div', ['main-content']);
		const content = getElement('div', ['content']);

		main.append(container);
		container.append(wrapper);
		wrapper.append(content);
		
		if (genre)
		{
				const genreSpan = getElement('span', 
					['genre', 'animated', 'fadeInRight'],
					{textContent: genre}
				);
				content.append(genreSpan);
		}

		if (rating)
		{
				const ratingBlock = getElement('div', ['rating', 'animated', 'fadeInRight']);
				const ratingStars = getElement('div', ['rating-stars']);
				const ratingNumber = getElement('div', ['rating-number'], {
						textContent: `${rating}/10`
				});

				for (let i = 0; i < 10; i++) 
				{
						const star = getElement('img', ['star'], {
							// Если i = 0, то 1 условие, если другое число - 2е
							alt: i ? '' : `Рейтинг ${rating} из 10`,
							src: i < rating ? 'img/star.svg' : 'img/star-o.svg'
						})
						ratingStars.append(star);
				}

				ratingBlock.append(ratingStars, ratingNumber);
				content.append(ratingBlock);
		}

		content.append(getElement('h1', 
				['main-title', 'animated', 'fadeInRight'], 
				{textContent: title}
		));

		if (description) 
		{
				content.append(getElement('p', 
						['main-description', 'animated', 'fadeInRight'],
						{textContent: description}
				));
		}

		if (trailer)
		{
				const youtubeLink = getElement('a',
					['button','animated','fadeInRight','youtube-modal'],
					{
							href: trailer,
							textContent: 'Смотреть трейлер',
					}
				);

				const youtubeImgLink = getElement('a',
						['play', 'youtube-modal'],
						{ 
								href: trailer,
								arialLabel: 'Смотреть трейлер',
						}
				);

				const iconPlay = getElement('img',
						['play-img'],
						{
								src: 'img/play.svg',
								alt: 'Смотреть трейлер',
								ariaHidden: true, // Для людей с проблемным зрением
						}
				);

				content.append(youtubeLink);
				youtubeImgLink.append(iconPlay);
				wrapper.append(youtubeImgLink);
		}

		if (slider)
		{

				const sliderBlock 	= getElement('div', ['series']);
				const swiperBlock 	= getElement('div', ['swiper-container']);
				const swiperWrapper = getElement('div', ['swiper-wrapper']);
				const arrow 				= getElement('button', ['arrow']);

				const slides = slider.map( item =>{
						const swiperSlide = getElement('div', ['swiper-slide']);
						const card 				= getElement('figure', ['card']);
						const cardImage		= getElement('img', ['card-img'], {
								src: item.img,
								// Если есть title, то вставляем его, иначе ''/
								alt: ((item.title || '') + ' ' + (item.subtitle || '')).trim(),
						})

						card.append(cardImage);

						// Обработка отсутсвия title и subtitle
						if (item.title || item.subtitle)
						{
								const cardDescription 		= getElement('figcaption', ['card-description']);
								cardDescription.innerHTML = `
										${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
										${item.title ? `<p class="card-title">${item.title}</p>` : ''}
								`;
								card.append(cardDescription);
						}
						swiperSlide.append(card);
						return swiperSlide;
				});

				swiperWrapper.append(...slides);
				swiperBlock.append(swiperWrapper);
				sliderBlock.append(swiperBlock, arrow);

				container.append(sliderBlock);


				new Swiper( swiperBlock , {
				loop: true,
				navigation: {
					nextEl: arrow,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					541: {
						slidesPerView: 2,
						spaceBetween: 40
					}
				}
			});
		}

		return main;
};

const createFooter = ({footer: {left, right }}) => {
		
		const footer 		= getElement('footer', ['footer']);
		const container = getElement('div', ['container']);
		const wrapper 	= getElement('div', ['footer-content']);

		footer.append(container);
		container.append(wrapper);

		if ( left )
		{
				const leftDiv 		= getElement('div', ['left']);
				const leftDivSpan	= getElement('span', ['copyright'], { 
					textContent: left.map(item=>{ return item.text })
				});

				leftDiv.append(leftDivSpan);
				wrapper.append(leftDiv);
		}

		if ( right )
		{
				const rightDiv 		= getElement('div', ['right']);
				const rightDivNav = getElement('nav', ['footer-menu']);

				const hrefs = right.map( item =>{
						const href = getElement('a', ['footer-link'], { textContent: item.text });
						return href;
				});

				rightDivNav.append(...hrefs);
				rightDiv.append(rightDivNav);
				wrapper.append(rightDiv);
		}

		return footer;
}

// Функция принимает selector и параметр
// Стрелочная функция быстрее, чем обычная функция
// Можно писать укороченные функции:
// const arrow = a => a+a
// (У такой функции нет контекста вызова)
const movieConstructor = (selector, options) => {

		// Захватили div нашего приложения
		const app = document.querySelector(selector);

		// Добавим стили к приложению
		app.classList.add('body-app');

		// Устанавливаем стили
		app.style.color 					= options.fontColor || '';
		app.style.backgroundColor = options.backgroundColor || '';
		document.documentElement.style.setProperty('--sub-color', options.subColor || '');

		if (options.favicon)
		{
				// Индекс точки (расширения)
				// Достаем тип из адреса favicon
				const index = options.favicon.lastIndexOf('.');
				const type 	= options.favicon.substring(index + 1);
				// Для Svg нуен особый тип, а не просто svg.
				// type == 'svg' ? 'image/svg-xml': type

				const favicon = getElement('link', null, {
						rel: 'icon',
						href: options.favicon,
						type: type == 'svg' ? 'image/svg-xml': type
				});

				document.head.append(favicon);
		}

		// Тернаный оператор
		// console.log(x === 'rain' ? 'Дождь' : 'Не дождь')
		// ` - унарные строки, позволяют всавлять интерполяцию
		// если Background есть, то помещаем в url, нет - нет
		// 
		// По другому было бы так:
		// 'url("'+ option.bacground + '")'
		app.style.backgroundImage = options.background ?
		`url("${options.background}")` : '';

		// Проверяем правильность переданных данных (if)
		// Вставляем в наш div->header.
		if (options.header) 
		{
				app.append(createHeader(options));
		}

		if (options.main) 
		{
				app.append(createMain(options));
		}

		if (options.footer) 
		{
				app.append(createFooter(options));
		}

};