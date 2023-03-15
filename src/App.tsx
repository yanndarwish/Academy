import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchSection from './components/SearchSection/SearchSection'
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
      </main>
    </div>
  )
}

export default App
