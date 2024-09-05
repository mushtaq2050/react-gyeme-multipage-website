
import './App.css'
import Home from "../src/Components/Home/Home"
import Navbar from "../src/Components/Navbar/Navbar"
import Contact from "../src/Components/Contact/Contact"
import Plan from "../src/Components/Plans/Plan"
import About from "../src/Components/About/About"
import Trainers from "../src/Components/Trainers/Trainers"
import Footer from "../src/Components/Footer/Footer"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='bg-navbar'>
    <Navbar/>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/contact' element={<Contact/>}/> 
    <Route path='/plan' element={<Plan/>}/> 
    <Route path='/about' element={<About/>}/> 
    <Route path='/trainer' element={<Trainers/>}/> 
    </Routes>
    <div className='footer-bg'>
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
