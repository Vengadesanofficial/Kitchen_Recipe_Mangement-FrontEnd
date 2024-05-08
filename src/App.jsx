
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'
import './components/AddReceipe'
import AddReceipe from './components/AddReceipe'
import Saved from './components/Saved'
import Detail from './components/Detail'
import Spinner from './components/Spinner'
import FetchReceipeById from './components/FetchReceipeById'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
  <>
<Router>
  <NavBar/>
  <Routes>
     <Route exact path='/' element={<Home/>}/>
    <Route  path='/register' element={<Register/>}/>
    <Route  path='/add' element={<AddReceipe/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/profile' element={<Profile/>}/>
    <Route  path='/saved' element={<Saved/>}/> 
    <Route  path='/:id' element={<Detail/>}/> 
      <Route  path='/spinner' element={<Spinner/>}/> 
  </Routes>
</Router>
  


  </>
     )
}

export default App
