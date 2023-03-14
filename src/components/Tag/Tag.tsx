import "./Tag.css"

export interface ITagProps {
	isIcon: boolean
	content: string
}

const Tag = (props: ITagProps) => {
	return (
		<div className={`tag ${props.isIcon && "tag-icon"}`}>
			{props.isIcon ? (
				<img src={props.content} alt="icon" />
			) : (
				<h5>{props.content}</h5>
			)}
		</div>
	)
}

export default Tag
