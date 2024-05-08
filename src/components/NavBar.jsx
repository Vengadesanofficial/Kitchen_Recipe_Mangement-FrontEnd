import React, { useContext, useState } from 'react'
import '../CSS/navbar.css'
import {Link} from 'react-router-dom'
import {AppContext} from '../Context/App_Context'

const NavBar = () => {
  const {isAuthenticated,setisAuthenticated,logOut}= useContext(AppContext)
  return (
    <div className='mian-navcontainer'>
       <div className='Navbar'>
      <div className='title'><h1>Kitchen Recipe</h1></div>
     <div className='option-btn'> 
{isAuthenticated &&(
  <>
   <Link to={"/"} className='nav-btn'> HOME</Link>
    <Link to={"/add"} className='nav-btn'> ADD</Link>
    <Link to={"/profile"} className='nav-btn'> PROFILE</Link>
    <Link to={"/saved"} className='nav-btn'> SAVED</Link>
      <Link className='nav-btn' onClick={logOut}> LOGOUT</Link> 
  </>
)}
{
  !isAuthenticated &&(
    <>
    <Link to={"/"} className='nav-btn'> HOME</Link>
    <Link to={"/register"} className='nav-btn'> REGISTER</Link>
    <Link to={"/login"} className='nav-btn'> LOGIN</Link>
    

    </>
  )
}

     {/* <Link to={"/"} className='nav-btn'> HOME</Link>
     <Link to={"/add"} className='nav-btn'> ADD</Link>
     <Link to={"/register"} className='nav-btn'> REGISTER</Link>
      <Link to={"/profile"} className='nav-btn'> PROFILE</Link>
      <Link to={"/login"} className='nav-btn'> LOGIN</Link>
        <Link className='nav-btn' onClick={logOut}> LOGOUT</Link>   
        <Link to={"/Saved"} className='nav-btn'> SAVED</Link> */}
    </div>
    </div>
    </div>
   
    )
}
export default NavBar;