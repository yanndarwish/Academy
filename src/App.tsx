import "./App.css"
import CourseAction from "./components/CourseAction/CourseAction"
import CourseSection from "./components/CourseSection/CourseSection"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import InstructorSection from "./components/InstructorSection/Instructor"
import NewsletterSection from "./components/NewsletterSection/NewsletterSection"
import SearchSection from "./components/SearchSection/SearchSection"
import Section from "./components/Section/Section"
import TagSection from "./components/TagSection/TagSection"
import TopCourseAction from "./components/TopCourseAction/TopCourseAction"
import TopCourseSection from "./components/TopCourseSection/TopCourseSection"
import YourCourseAction from "./components/YourCourseAction/YourCourseAction"
import YourCourseSection from "./components/YourCourseSection/YourCourseSection"

function App() {
	return (
		<div className="App">
			<Header />
			<div className="divider"></div>
			<main>
				<TagSection />
				<Hero />
				<SearchSection />
				<Section title="new courses" action={<CourseAction />}>
					<CourseSection />
				</Section>
				<InstructorSection />
				<Section title="your courses" action={<YourCourseAction />}>
					<YourCourseSection />
				</Section>
				<NewsletterSection />
				<Section title="top courses" action={<TopCourseAction />}>
					<TopCourseSection />
				</Section>
			</main>
		</div>
	)
}

export default App
