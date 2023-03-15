import './App.css'
import CourseAction from './components/CourseAction/CourseAction'
import CourseSection from './components/CourseSection/CourseSection'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchSection from './components/SearchSection/SearchSection'
import Section from './components/Section/Section'
import TagSection from './components/TagSection/TagSection'

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
      </main>
    </div>
  )
}

export default App
