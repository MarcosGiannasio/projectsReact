import './Nav.css'

function nav() {
  
  return (
<nav id="navegador"/*  class="container" */>
<div><a /* class="col-3" */ href="./index.html"><img src="./src/assets/logoMB.svg" class="logo"></img></a></div>
    <ul /* class="col-3" */>
    <li><a href="#"><strong>Login</strong></a></li>
    <li><a href="#"><strong>Contacto</strong></a></li>
    <li><a href="#"><strong>Conocenos</strong></a></li>
    <li><a href="#"><strong>Comprá</strong></a></li>
    </ul>
</nav>
  )
}

export default nav
