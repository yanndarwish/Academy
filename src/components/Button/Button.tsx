import "./Button.css"
export interface IButtonProps {
	text: string
	icon?: { position: string; element: any}
    class?: string
}

export default function Button(props: IButtonProps) {
	return (
		<button className={`button ${props.class && props.class}`}>
			{props.icon?.position === "start" && props.icon?.element}
			{props.text}
			{props.icon?.position === "end" && props.icon?.element}
		</button>
	)
}
