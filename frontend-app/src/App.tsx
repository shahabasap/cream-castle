
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} >
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
