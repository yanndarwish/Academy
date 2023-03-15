import "./InstructorCard.css"
import { useRef, useEffect, useState } from "react"

export interface IInstructorCardProps {
	name: string
	role: string
	img: string
}

export default function InstructorCard(props: IInstructorCardProps) {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (ref.current) {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[0]
				setIsVisible(entry.isIntersecting)
			})
			observer.observe(ref.current)
		}
	}, [])

	useEffect(() => {
		if (ref.current) {
			if (isVisible) {
				ref.current.classList.add("appearLeft")
			} else {
				ref.current.classList.remove("appearLeft")
			}
		}
	}, [isVisible])
	return (
		<div ref={ref} className="instructor-card">
			<img src={props.img} alt={props.name} />
			<div className="instructor-card-bottom">
				<h6 className="card-title">{props.name}</h6>
				<p className="instructor-role">{props.role}</p>
			</div>
		</div>
	)
}
