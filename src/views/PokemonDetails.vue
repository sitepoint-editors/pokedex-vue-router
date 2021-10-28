<template>
	<MoreDetails :pokemon="pokemon" />
</template>
<script>
import axios from "axios";
import MoreDetails from "../components/MoreDetails.vue";

export default {
	name: "PokemonDetails",
	data() {
		return {
			pokemon: null,
		};
	},
	mounted() {
		const pokemon_name = this.$route.params.name;

		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
			.then((res) => {
				const data = res.data;

				axios
					.get(
						`https://pokeapi.co/api/v2/evolution-chain/${this.$route.params.specie_id}`
					)
					.then((res) => {
						let evolution_chain = [res.data.chain.species.name];

						if (res.data.chain.evolves_to.length > 0) {
							evolution_chain.push(
								res.data.chain.evolves_to[0].species.name
							);

							// for Pokemon whose next evolution branches out to multiple types (eg. eevee)
							if (res.data.chain.evolves_to.length > 1) {
								const evolutions = res.data.chain.evolves_to.map(
									(item) => {
										return item.species.name;
									}
								);

								evolution_chain[1] = evolutions.join(" | ");
							}

							if (
								res.data.chain.evolves_to[0].evolves_to.length >
								0
							) {
								evolution_chain.push(
									res.data.chain.evolves_to[0].evolves_to[0]
										.species.name
								);
							}

							Object.assign(data, {
								evolution_chain,
							});
						}

						this.pokemon = data;
					});
			});
	},
	components: {
		MoreDetails,
	},
};
</script>
