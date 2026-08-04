import './App.css'
import { Details } from './Components/Details'
import { Display } from './Components/Display'
import { Explore } from './Components/Explore'
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
        <Details />
        <Explore />
      </div>
    </div>
  )
}

export default App
