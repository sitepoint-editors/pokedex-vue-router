import { createRouter, createWebHistory } from "vue-router";

import PokemonList from "../views/PokemonList.vue";
import Pokemon from "../views/Pokemon";
import PokemonDetails from "../views/PokemonDetails";
import NotFound from "../views/NotFound";

import valid_pokemon from "../data/valid-pokemon.json";

const routes = [
  {
    path: "/",
    name: "PokemonList",
    component: PokemonList,
  },
  {
    path: "/pokemon/:name",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/pokemon/:name/:specie_id/details",
    name: "PokemonDetails",
    component: PokemonDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (
    to.params &&
    to.params.name &&
    valid_pokemon.indexOf(to.params.name) === -1
  ) {
    return "/404";
  }

  if (
    (to.params &&
      to.params.name &&
      to.params.specie_id &&
      valid_pokemon.indexOf(to.params.name) === -1 &&
      to.params.specie_id < 0) ||
    to.params.specie_id > 101
  ) {
    return "/404";
  }
});

export default router;
