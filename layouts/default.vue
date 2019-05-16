<template>
	<v-app dark>
		<v-navigation-drawer :mini-variant.sync="miniVariant" :clipped="clipped" v-model="drawer" fixed app >
			<v-list>
				<template v-for="(item, i) in menu">
					<v-list-tile v-if="!item.sub" router :to="item.to" :key="i" exact>
						<v-list-tile-action>
							<v-icon v-html="item.icon"></v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title v-text="item.title"></v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-group v-else router>
						<template v-slot:activator>
							<v-list-tile>
								<v-list-tile-action>
									<v-icon v-html="item.icon"></v-icon>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title v-text="item.title"></v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</template>
						<v-list-tile v-for="(subitem, i) in item.sub" :key="i" :to="subitem.to">
							<v-list-tile-title v-text="subitem.title"></v-list-tile-title>
						</v-list-tile>
					</v-list-group>
				</template>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar fixed app :clipped-left="clipped">
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title v-text="title"></v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import axios from 'axios'
	import { mapMutations, mapGetters } from 'vuex'

	export default {
		data () {
			return {
				clipped: true,
				drawer: false,
				fixed: false,
				miniVariant: false,
				menu: [
					{ icon: 'home', title: 'Welcome', to: '/' },
				],
				title: 'Nuxt.js template',
			}
		},
		mounted () {
		},
		computed: mapGetters({
			token: 'auth/token',
		}),
		methods: {
			...mapMutations({
				setToken: 'auth/token',
			}),
		}
	};
</script>
