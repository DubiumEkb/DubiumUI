import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/styles/global.scss"
import App from "./App.tsx"

const rootElement = document.getElementById("root") as HTMLElement | null

if (rootElement) {
	const root = createRoot(rootElement)
	root.render(
		<StrictMode>
			<App />
		</StrictMode>,
	)
}
