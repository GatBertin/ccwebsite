import React,{useState} from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
//Import Icons are missing========>
import {SiConsul} from 'react-icons/si'
import {CgMenuGridO} from 'react-icons/cg'
//import link pages 
//Import images========>s
import logo from '../../images/logo.png'

const Navbar = () => {
   //let us remove the NavBar in the small width screen
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = () =>{
    setActive('navBarMenu showNavBar')
  }
  const removeNavBar = () =>{
    setActive('navBarMenu')
  }
  //let us add a background color to the second Navbar ==>

  const [noBg, addBg] = useState('navBartwo')
  const addBgColor =()=>{
    if(window.scrollY >= 10){
        addBg('navBartwo navbar_with_Bg')
   } else{
      addBg('navBarTwo')
   }
  }
  window.addEventListener('scroll', addBgColor)

  return (
     
     <div className='navBar flex'>
      <div className="navBarOne flex">
        <SiConsul/>
      </div>
     <div className={noBg}>
      <div className="logoDiv">
        <img src={logo} className ='Logo'/>
      </div>
      <div className={active}>
        <ul className="menu flex">
          <li onClick={removeNavBar} className="listItem">Home
          </li>
          <li onClick={removeNavBar} className="listItem">Products
          </li>
          <li onClick={removeNavBar} className="listItem">Services
            </li>
          <li onClick={removeNavBar} className="listItem">About us </li>
        </ul>

        <button onClick={removeNavBar} className='btn flex btnOne' >
          contact
        </button>
        </div>
        <button className='btn flex btntwo' >
          contact
        </button>
        <div onClick={showNavBar}  className='toogleIcon'>
           <CgMenuGridO className='icon'/>
        </div>
     </div>
     </div>  
     
  )
}

export default Navbar

{/*<BrowserRouter>
     <Navbar>
     <Route index element={<Home/>}/>
       <Route path='/product' element={<Products/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='/about'element={About} />
     </Navbar>
     </BrowserRouter> 
     */}