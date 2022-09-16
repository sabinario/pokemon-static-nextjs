import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
	console.log(props);
	return (
		<>
			<Layout title='Listado de Pokémons'>
				<ul>
					<li>Pokémon</li>
					<li>Pokémon</li>
					<li>Pokémon</li>
					<li>Pokémon</li>
					<li>Pokémon</li>
					<li>Pokémon</li>
				</ul>
			</Layout>
		</>
	);
};

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here

	console.log('hello world');

	return {
		props: {
			name: 'Fernando',
		},
	};
};
