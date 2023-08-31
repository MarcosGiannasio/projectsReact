import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'



function App () {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto="TU CASA, COMO SIEMPRE SOÑASTE..."/>
    </>
  );
}

export default App







/* 
function App() {
  
  return (
<div>
  <navBar/>
</div>

  )
}

function Cart() {
  
  return (
    <div>
    <CartWidget/>
    </div>
  )
}


export default {App, Cart}; */