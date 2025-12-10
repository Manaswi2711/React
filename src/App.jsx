import './App.css'
import Navbar from './components/Navbar'
import Products from './features/products/Products'
import { Link ,Outlet} from 'react-router-dom'

function App() {
 return (
    <>
    <Navbar></Navbar>
     <Outlet></Outlet>
    </>
  )
}

export default App
