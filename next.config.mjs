/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { dev }) => {
		if (dev) {
			config.plugins = config.plugins.filter(
				(plugin) => plugin.constructor.name !== 'MiniCssExtractPlugin',
			)
		}
		return config
	},
}

export default nextConfig
