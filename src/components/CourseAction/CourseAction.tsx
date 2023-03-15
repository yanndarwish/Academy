import "./CourseAction.css"

export interface ICourseActionProps {}

export default function CourseAction(props: ICourseActionProps) {
	const handleClick = (target: HTMLDivElement) => {
		if (target) {
			const tags = document.querySelectorAll(".course-tag")
			tags.forEach((tag) => {
				tag.classList.remove("active")
			})
			target.classList.add("active")
		}
	}
	return (
		<div className="course-action-container">
			<div className="course-tag active" onClick={(e) => handleClick(e.currentTarget)}>All Course</div>
			<div className="course-tag" onClick={(e) => handleClick(e.currentTarget)}>Design</div>
			<div className="course-tag" onClick={(e) => handleClick(e.currentTarget)}>Development</div>
			<div className="course-tag" onClick={(e) => handleClick(e.currentTarget)}>Photography</div>
			<div className="course-tag" onClick={(e) => handleClick(e.currentTarget)}>Music</div>
		</div>
	)
}
