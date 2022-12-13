import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => (
    <div id='top' className='app'>

      <main>
        <About />
        <Projects />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  )


export default App
