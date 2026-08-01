import './App.css'
import { Display } from './Components/Display'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Section2 } from './Components/Section2'

function App() {
  return (
    <div className='App '>
      <Header />
      <div id='main-content'>
        <Hero />
        <Section2 />
        <Display />
      </div>
    </div>
  )
}

export default App
