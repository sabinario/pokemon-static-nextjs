import React, { useEffect, useState } from 'react';

import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps } from 'next';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import PokemonData from '../../components/pokemon/PokemonData';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
	pokemon: Pokemon;
}

function PokemonByNamePage({ pokemon }: Props) {
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsFavorite(!isFavorite);

		if (isFavorite) return;

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 150,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	useEffect(() => {
		setIsFavorite(localFavorites.checkPokemonIsFavorite(pokemon.id));
	}, [pokemon.id]);

	return (
		<Layout title={pokemon.name}>
			<PokemonData
				pokemon={pokemon}
				isFavorite={isFavorite}
				toggleFavorite={toggleFavorite}
			/>
		</Layout>
	);
}

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const {
		data: { results },
	} = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

	const paths = results.map((pokemon) => ({
		params: { name: pokemon.name },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { name } = ctx.params as { name: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

	const pokemon = {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};

	return {
		props: {
			pokemon,
		},
	};
};
