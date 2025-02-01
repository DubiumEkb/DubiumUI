import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			name: "DubiumUI",
			fileName: "dubium_ui",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		include: ["src/components/**/*.test.{ts,tsx}"],
		exclude: ["src/stories/**/*.{ts,tsx}", "src/App.tsx", "src/main.tsx"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
		},
	},
})
