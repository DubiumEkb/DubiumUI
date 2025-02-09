import dts from "rollup-plugin-dts"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

// Получаем __dirname в ES-модулях
const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
	input: resolve(__dirname, "src/components/index.ts"),
	output: {
		file: resolve(__dirname, "dist/types/index.d.ts"),
		format: "es",
	},
	plugins: [
		dts({
			include: ["src/components"],
			exclude: ["**/*.test.tsx", "**/*.stories.tsx", "**/index.ts"],
			compilerOptions: {
				paths: {
					"@dubium/ui": ["src/components/index.ts"],
					"@dubium/ui/*": ["src/components/*"],
				},
			},
		}),
	],
}
