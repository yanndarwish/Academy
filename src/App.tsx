import './App.css'
import CourseAction from './components/CourseAction/CourseAction'
import CourseSection from './components/CourseSection/CourseSection'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import InstructorSection from './components/InstructorSection/Instructor'
import SearchSection from './components/SearchSection/SearchSection'
import Section from './components/Section/Section'
import TagSection from './components/TagSection/TagSection'
import YourCourseAction from './components/YourCourseAction/YourCourseAction'
import YourCourseSection from './components/YourCourseSection/YourCourseSection'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="divider"></div>
      <main>

      <TagSection />
      <Hero />
      <SearchSection />
      <Section title='new courses' action={<CourseAction />}>
        <CourseSection />
      </Section>
      <InstructorSection />
      <Section title='your courses' action={<YourCourseAction />}>
        <YourCourseSection />
      </Section>
      </main>
    </div>
  )
}

export default App
