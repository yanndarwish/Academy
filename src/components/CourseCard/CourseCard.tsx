import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import "./CourseCard.css"
import book from "../../assets/icons/book.png"
import person from "../../assets/icons/person.png"
import level from "../../assets/icons/level.png"
import Button from "../Button/Button"
import { useRef, useEffect, useState } from "react"

export interface ICourseCardProps {
	title: string
	lesson: number
	student: number
	level: 1 | 2 | 3
	rating: number
	img: string
}

export default function CourseCard(props: ICourseCardProps) {
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
			if(isVisible) {
				ref.current.classList.add('appearUp')
			} else {
				ref.current.classList.remove('appearUp')
			}
		}
	}, [isVisible])
	return (
		<article ref={ref} className="course-card">
			<img src={props.img} alt={props.title} />
			<div className="course-card-bottom">
				<h5 className="card-title">{props.title}</h5>
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
				<div className="course-card-footer">
					<Button
						text="Start Course"
						icon={{ position: "end", element: <ChevronRightOutlinedIcon /> }}
						class="contained"
					/>
					{/* rating here */}
				</div>
			</div>
		</article>
	)
}
