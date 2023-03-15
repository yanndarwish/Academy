import "./InstructorCard.css"

export interface IInstructorCardProps {
	name: string
	role: string
	img: string
}

export default function InstructorCard(props: IInstructorCardProps) {
	return (
		<div className="instructor-card">
			<img src={props.img} alt={props.name} />
			<div className="instructor-card-bottom">
				<h6 className="card-title">{props.name}</h6>
				<p className="instructor-role">{props.role}</p>
			</div>
		</div>
	)
}
