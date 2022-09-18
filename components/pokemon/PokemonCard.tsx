import React from 'react';

import { useRouter } from 'next/router';

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';

interface Props {
	pokemon: SmallPokemon;
}

export function PokemonCard({ pokemon }: Props) {
	const { id, name, img } = pokemon;

	const router = useRouter();

	const onPokemonClick = () => {
		router.push(`/name/${name}`);
	};
	return (
		<Grid key={id} xs={6} sm={4} lg={2} md={3}>
			<Card isHoverable isPressable onPress={onPokemonClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width='100%' height={140} css={{ p: 10 }} />
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text>{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
}
