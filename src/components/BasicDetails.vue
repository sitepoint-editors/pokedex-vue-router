<template>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
		<h1>{{ pokemon.name }}</h1>
		<div class="types">
			<div
				class="type-box"
				v-for="row in pokemon.types"
				:key="row.slot"
				v-bind:class="row.type.name.toLowerCase()"
			>
				{{ row.type.name }}
			</div>
		</div>

		<div class="description">
			{{ pokemon.description }}
		</div>

		<a @click="moreDetails" class="link">More Details</a>
	</div>
</template>

<script>
export default {
	name: "BasicDetails",
	props: {
		pokemon: {
			type: Object,
		},
	},

	methods: {
		moreDetails() {
			this.$router.push({
				name: "PokemonDetails",
				params: {
					name: this.pokemon.name,
					specie_id: this.pokemon.specie_id,
				},
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/types.scss";
@import "../styles/pokemon.scss";
</style>
