// const env = require('./secrets.json')

module.exports = {
	mode: 'universal',
	head: {
		title: 'Vue Nuxt Test',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},
	plugins: ['~/plugins/vuetify.js'],
	css: ['~/assets/css/app.styl'],
	loading: { color: '#3B8070' },
	build: {
		vendor: ['vuetify']
	},
	performance: {
		gzip: false
	},
	router: {
		base: `/`
	},
	dev: false
}