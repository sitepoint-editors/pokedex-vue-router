<template>
	<div v-if="items">
		<router-link
			:to="{ name: 'Pokemon', params: { name: row.name } }"
			class="link"
			v-for="row in items"
			:key="row.name"
		>
			<div class="list-item">
				{{ row.name }}
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "List",
	props: {
		items: {
			type: Array,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/list.scss";
</style>
