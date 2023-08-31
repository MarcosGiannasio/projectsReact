import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget'


export const NavBar= () => {
          return (
  <div>
    <nav className=" row align-items-center justify-content-between">
    <div className='col-3 mt-3'>
      <a className ="mx-5" href="./index.html"><img src="./src/assets/logoMB.svg" alt="logoPagina" /></a>
    </div>
    <div className='col-3'>
          <ul className=" d-flex justify-content-between" >
          <li><a className='text-decoration-none btn btn-secondary' href="#">Login</a></li>
          <li><a className='text-decoration-none btn btn-secondary' href="#">Conocenos</a></li>
      <li><a className='text-decoration-none btn btn-secondary' href="#">Shop</a></li>
          </ul>
    </div>
    <div className='col-3'>
    <ul className ="">
      <li><a  className="mx-5 numberCart" href="#"><CartWidget/>  0
        </a> 
        </li>
    </ul>
    </div>
    </nav>
  </div>
          )
}

export default NavBar ;
