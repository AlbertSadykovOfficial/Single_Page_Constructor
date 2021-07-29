movieConstructor('.app', {
		title: 'Локи',
		background: 'loki/background.jpg',
		favicon: 'loki/favicon.png',
		fontColor: '',
		backgroundColor: 'green',
		subColor: 'green',
		header: {
				// Путь к logo пишем относительно HTML-файла !!! 
				logo: 'loki/logo.png',
				social: [
						{
								title: 'Twitter',
								link: 'https://twitter.com',
								image: 'loki/social/twitter.svg',
						},
						{
								title: 'Instagram',
								link: 'https://instagram.com',
								image: 'loki/social/instagram.svg',
						},
						{
								title: 'Facebook',
								link: 'https://Facebook.com',
								image: 'loki/social/facebook.svg',
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

		main : {
        genre: '2021, фантастика, фэнтези, боевик, приключения',
        rating: '8',
        description: 'Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.',
        trailer: 'https://youtu.be/YrjHcYqe31g',
        slider: [
          {
            img: 'loki/series/series-1.jpg',
            title: 'Славная миссия',
            subtitle: 'Серия №1',
          }, 
          {
            img: 'loki/series/series-2.jpg',
            title: 'Вариант',
            subtitle: 'Серия №2',
          }, 
          {
            img: 'loki/series/series-3.jpg',
            title: 'Ламентис',
            subtitle: 'Серия №3',
          }, 
          {
            img: 'loki/series/series-4.jpg',
            title: 'Смежное событие',
            subtitle: 'Серия №4',
          },
          {
            img: 'loki/series/series-5.jpg',
            title: 'Путешествие в неизвестность',
            subtitle: 'Серия №5',
          },
          {
            img: 'loki/series/series-6.jpg',
            title: 'На все времена. Всегда',
            subtitle: 'Серия №6',
          }
        ]
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