import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (identifier: string) => {
	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${identifier}`);

	const pokemon = {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};

	return pokemon;
};
