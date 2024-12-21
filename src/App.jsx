import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import NewsLetter from './Components/NewsLetter'
import OtherTraick from './Components/OtherTraick'
import OurTraick from './Components/OurTraick'
import PrimiumLearning from './Components/PrimiumLearning'
import Tesimals from './Components/Tesimals'

function App() {

  return (
    <>
      <Header />
      <Home />
      <OurTraick />

      <PrimiumLearning />
      <Tesimals />
      <OtherTraick />
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
