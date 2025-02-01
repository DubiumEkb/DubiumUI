import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../components/Button"

const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary"],
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: "Primary Button",
		variant: "primary",
	},
}

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		variant: "secondary",
	},
}

export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
	},
}
