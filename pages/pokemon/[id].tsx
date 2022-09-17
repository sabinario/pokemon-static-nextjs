import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	return (
		<Layout title='Algún pokémon'>
			<h1>{pokemon.name}</h1>
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

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPage;
