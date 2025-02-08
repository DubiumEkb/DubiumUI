const config = {
	stories: ["../src/stories/*.stories.@(ts|tsx)", "../src/stories/**/*.mdx"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-onboarding",
	],
	framework: "@storybook/react-vite",
	core: {
		builder: "@storybook/builder-vite",
	},
	async viteFinal(config: any) {
		const { mergeConfig } = await import("vite")

		return mergeConfig(config, {
			optimizeDeps: {
				include: ["storybook-dark-mode"],
			},
		})
	},
}

export default config
