import CourseCard from "../CourseCard/CourseCard"
import { courses } from "../../data/data"
import "./CourseSection.css"

export interface ICourseSectionProps {}

export default function CourseSection(props: ICourseSectionProps) {
	return (
		<section className="course-section">
            {courses.map(course => (

			<CourseCard
            key={course.title}
				title={course.title}
				lesson={course.lesson}
				student={course.student}
				level={course.level}
				rating={course.rating}
				img={course.img}
			/>
            ))}
		</section>
	)
}
