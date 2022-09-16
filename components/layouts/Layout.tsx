import React from 'react';

import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
	children: React.ReactNode;
	title?: string;
}

export const Layout = ({ children, title = 'Pokemon App' }: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Sabino Fernandez' />
				<meta name='description' content='information about pokemon' />
				<meta name='keywords' content='pokemon, pokedex' />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};
