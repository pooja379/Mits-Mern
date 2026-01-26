import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Counter from './component/Counter'
import  {Route,Routes} from 'react-router-dom'
import UseState from './Hooks/UseState'
import Login from './auth/Login'
const element=<h1>Hello</h1>
const App = () => {
  return (
    <>
    <h1>Hello</h1>
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<Home name="A.pooja"/>}/>
    <Route path='/about' element={<About name="A.pooja" age={25} dept="Cyber Security"/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/useState'element={<UseState/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </>
  )
}
export default App