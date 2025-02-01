import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import { describe, expect, it } from "vitest"

describe("Button", () => {
	it("renders the button with correct text", () => {
		render(<Button>Click me</Button>)
		const buttonElement = screen.getByText(/Click me/i)
		expect(buttonElement).toBeInTheDocument()
	})

	it("applies the primary variant class", () => {
		render(<Button variant="primary">Primary Button</Button>)
		const buttonElement = screen.getByText(/Primary Button/i)
		expect(buttonElement).toHaveClass("bg-blue-500")
	})

	it("applies the disabled state", () => {
		render(<Button disabled>Disabled Button</Button>)
		const buttonElement = screen.getByText(/Disabled Button/i)
		expect(buttonElement).toBeDisabled()
	})
})
