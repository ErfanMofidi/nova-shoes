import './App.css'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'

function App() {
  return (
    <div className='App '>
      <Header />
      <div id='main-content'>
        <Hero />
      </div>
    </div>
  )
}

export default App
