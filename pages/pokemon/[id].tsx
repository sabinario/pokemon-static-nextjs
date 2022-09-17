import React, { useEffect, useState } from 'react';

import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import PokemonData from '../../components/pokemon/PokemonData';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemons = [...Array(151)].map((value, index) => `${index + 1}`);
	return {
		paths: pokemons.map((id) => ({
			params: { id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { id } = ctx.params as { id: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

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

export default PokemonPage;
