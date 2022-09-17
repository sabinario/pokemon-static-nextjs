import React from 'react';

import { useRouter } from 'next/router';

import { Card, Grid } from '@nextui-org/react';

interface Props {
	id: number;
}

function FavoriteCardPokemon({ id }: Props) {
	const router = useRouter();

	const onPokemonClick = () => {
		router.push(`/pokemon/${id}`);
	};
	return (
		<Grid xs={6} sm={4} md={3} lg={2} key={id}>
			<Card
				isHoverable
				isPressable
				css={{
					padding: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={onPokemonClick}
			>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					width={'100%'}
					height={140}
				/>
			</Card>
		</Grid>
	);
}

export default FavoriteCardPokemon;
