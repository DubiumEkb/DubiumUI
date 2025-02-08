import classNames from "classnames"

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	variant?: "primary" | "secondary"
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, variant = "primary" }) => {
	const buttonClasses = classNames("px-4 py-2 rounded font-semibold", {
		"bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
		"bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
		"opacity-50 cursor-not-allowed": disabled,
	})

	return (
		<button className={buttonClasses} style={{ fontSize: "2em" }} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}
