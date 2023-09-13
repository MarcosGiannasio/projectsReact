import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer'


function App () {

  return (
    
    <BrowserRouter>

        <NavBar/>


    <Routes> 
      <Route exact path='/' element={<ItemListContainer texto="TU CASA, COMO SIEMPRE SOÑASTE..."/>}/>
      <Route exact path="/category/:categoryName" element={<ItemListContainer/>}></Route>
      <Route exact path="/description/:descriptionId" element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App 
