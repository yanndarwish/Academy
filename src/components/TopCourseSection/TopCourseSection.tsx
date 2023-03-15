import { courses } from "../../data/data"
import CourseCard from "../CourseCard/CourseCard"

const topCourses = courses.slice(0, 4)
export default function TopCourseSection() {
	return (
		<section className="course-section">
			{topCourses.map((item) => (
				<CourseCard
					key={item.title}
					title={item.title}
					lesson={item.lesson}
					student={item.student}
					level={item.level}
					rating={item.rating}
					img={item.img}
				/>
			))}
		</section>
	)
}
