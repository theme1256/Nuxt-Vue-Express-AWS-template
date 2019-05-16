<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm8 md6>
			<logo></logo>
			<v-card>
				<v-card-title class="headline">This is a template</v-card-title>
				<v-card-text v-if="butik_id > 0">
					<p>It a basic one, but it works</p>
					<div class="text-xs-right">
						<em><small>&mdash; Folkmann</small></em>
					</div>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	import Logo from '@/components/Logo';
	import { mapGetters } from 'vuex'
	
	export default {
		name: "index",
		components: {
			Logo
		},
		computed: mapGetters({
			token: 'auth/token',
		}),
		mounted () {
		},
	};
</script>