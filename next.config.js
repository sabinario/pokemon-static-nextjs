/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	/* To be able to use outside images when the site is statically generated we
  must allow the domains of the images so next know its a safe domain */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
		],
	},
};

module.exports = nextConfig;
