import book from "../../assets/icons/book.png"
import person from "../../assets/icons/person.png"
import level from "../../assets/icons/level.png"
import { instructors } from "../../data/data"
import "./YourCourseCard.css"
import Button from "../Button/Button"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import { useRef, useEffect, useState } from "react"

export interface IYourCourseCardProps {
	title: string
	lesson: number
	student: number
	level: 1 | 2 | 3
	progress: number
	professor: number
	days: number
	img: string
}

export default function YourCourseCard(props: IYourCourseCardProps) {
	const [isVisible, setIsVisible] = useState(false)
	const progressRef = useRef<HTMLDivElement | null>(null)
	const instructor = instructors.filter(
		(item) => item.id === props.professor
	)[0]
	const progress = isVisible ? props.progress : 0

	useEffect(() => {
		if (progressRef.current) {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[0]
				setIsVisible(entry.isIntersecting)
			})
			observer.observe(progressRef.current)
		}
	}, [])

	useEffect(() => {
		if (progressRef.current) {
			progressRef.current.style.width = `${progress}%`
		}
	}, [isVisible])

	return (
		<div className="your-course-card">
			<img src={props.img} alt={props.title} />
			<div className="your-course-card-bottom">
				<h6 className="card-title">{props.title}</h6>
				<div className="card-info">
					<div className="lesson">
						<img src={book} alt="lesson" />
						<h6>Lesson : {props.lesson}</h6>
					</div>
					<div className="student">
						<img src={person} alt="student" />
						<h6>Student : {props.student}</h6>
					</div>
					<div className="level">
						<img src={level} alt="level" />
						<h6>
							{props.level === 1
								? "Beginner"
								: props.level === 2
								? "Average"
								: "Advanced"}
						</h6>
					</div>
				</div>
				<div className="progression">
					<div className="progress">
						<div className="progress-bar"></div>
						<div ref={progressRef} className="actual-progress">
							<div className="progress-point"></div>
						</div>
					</div>
					<div className="progress-info">
						<p>Points : {props.progress} / 100</p>
						<p>Days : {props.days}</p>
					</div>
				</div>
				<div className="your-course-card-footer">
					<div className="professor-section">
						<img src={instructor.img} alt={instructor.name} />
						<div className="professor-info">
							<p className="professor-name">{instructor.name}</p>
							<p className="professor-role">{instructor.role}</p>
						</div>
					</div>
					<Button
						text="Let's Go"
						icon={{ position: "end", element: <ChevronRightOutlinedIcon /> }}
						class="contained"
					/>
				</div>
			</div>
		</div>
	)
}
