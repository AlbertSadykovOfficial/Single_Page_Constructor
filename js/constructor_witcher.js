// 1й параметр - Селектор - класс (.app)
// 2й параметр - Объект
// Путь к logo пишем относительно HTML-файла !!! 
movieConstructor('.app', {
		title: 'Ведьмак',
		background: 'witcher/background.jpg',
		favicon: 'witcher/logo.png',
		fontColor: '',
		backgroundColor: '',
		subColor: '',
		header: {
				// Путь к logo пишем относительно HTML-файла !!! 
				logo: 'witcher/logo.png',
				social: [
						{
								title: 'Twitter',
								link: 'https://twitter.com',
								image: 'witcher/social/twitter.svg',
						},
						{
								title: 'Instagram',
								link: 'https://instagram.com',
								image: 'witcher/social/instagram.svg',
						},
						{
								title: 'Facebook',
								link: 'https://Facebook.com',
								image: 'witcher/social/facebook.svg',
						}
				],
				menu: [
						{
								title: 'Описание',
								link: '#',
						}, 
						{
								title: 'Трейлер',
								link: '#',
						}, 
						{
								title: 'Отзывы',
								link: '#',
						},
				],
				menuButton: 'x',
		},

		main: {
				genre: '2019, фентези',
				rating: 8,
				description: 'Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.',
				trailer: 'href="https://www.youtube.com/watch?v=P0oJqfLzZzQ',
				slider: [
						{
								img: 'witcher/series/series-1.jpg',
								title: 'Начало конца',
								subtitle: 'Серия №1',
						},
						{
								img: 'witcher/series/series-2.jpg',
								title: 'Четыре марки',
								subtitle: 'Серия №2',
						},
						{
								img: 'witcher/series/series-3.jpg',
								title: 'Предательская луна',
								subtitle: 'Серия №3',
						},
						{
								img: 'witcher/series/series-4.jpg',
								title: 'Банкеты, ублюдки и похороны',
								subtitle: 'Серия №4',
						},
				],
		},

		footer: {
				left: [
						{
								text: '© 2020 The Witcher. All right reserved.',
						},
				],
				right: [
						{
								text: 'Privacy Policy',
						},
						{
								text: 'Terms of Service',
						},
						{
								text: 'Legal',
						},
				],
		}
});