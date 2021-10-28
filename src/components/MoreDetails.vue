<template>
	<div v-if="pokemon">
		<h1>{{ pokemon.name }}</h1>

		<div v-if="pokemon.evolution_chain" class="section">
			<h2>Evolution Chain</h2>
			<span v-for="(name, index) in pokemon.evolution_chain" :key="name">
				<span v-if="index">-></span>
				{{ name }}
			</span>
		</div>

		<div v-if="pokemon.abilities" class="section">
			<h2>Abilities</h2>

			<div v-for="row in pokemon.abilities" :key="row.ability.name">
				{{ row.ability.name }}
			</div>
		</div>

		<div v-if="pokemon.moves" class="section">
			<h2>Moves</h2>
			<div v-for="row in pokemon.moves" :key="row.move.name">
				{{ row.move.name }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MoreDetails",
	props: {
		pokemon: {
			type: Object,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/more-details.scss";
</style>
