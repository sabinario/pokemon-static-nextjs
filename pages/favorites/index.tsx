import React, { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

function Favorites() {
	const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

	useEffect(() => {
		setFavoritesPokemon(localFavorites.pokemons());
	}, []);

	return (
		<Layout title='Pokémons - Favoritos'>
			{!favoritesPokemon.length ? (
				<NoFavorites />
			) : (
				<FavoritePokemons pokemons={favoritesPokemon} />
			)}
		</Layout>
	);
}

export default Favorites;
