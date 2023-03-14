import "./Button.css"
export interface IButtonProps {
	text: string
	icon?: { position: string; element: any }
	class?: string
	onClick?: () => void
}

const Button = (props: IButtonProps) => {
	return (
		<button
			onClick={props.onClick && props.onClick}
			className={`button ${props.class && props.class}`}
		>
			{props.icon?.position === "start" && props.icon?.element}
			{props.text}
			{props.icon?.position === "end" && props.icon?.element}
		</button>
	)
}

export default Button
