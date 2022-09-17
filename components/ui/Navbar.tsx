import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Link as NewLink, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0 20px',
				backgroundColor: theme?.colors.gray300.value,
			}}
		>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
				alt='icono'
				width={70}
				height={70}
			/>
			<Link href='/' passHref>
				<NewLink>
					<Text color='white' h2>
						P
					</Text>
					<Text color='white' h3>
						okémon
					</Text>
				</NewLink>
			</Link>
			<Spacer css={{ flex: 1 }} />
			<Link href='/favorites' passHref>
				<NewLink>
					<Text color='white'>Favoritos</Text>
				</NewLink>
			</Link>
		</div>
	);
};
