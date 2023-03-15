import { yourCourses } from "../../data/data"
import YourCourseCard from "../YourCourseCard/YourCourseCard"
import "./YourCourseSection.css"

export default function YourCourseSection() {
	return (
		<div className="your-course-section">
			{yourCourses.map((item) => (
				<YourCourseCard
					key={item.title}
					title={item.title}
					lesson={item.lesson}
					student={item.student}
					level={item.level}
					progress={item.progress}
					professor={item.professor}
					days={item.days}
					img={item.img}
				/>
			))}
		</div>
	)
}
