import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  //logica
  const myFunction = ()=>{}

  const stylesP = {
    border: 'solid 2px blue',
    padding: '20px',
  }

  return (
    <>
    <BrowserRouter>

      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/mujer' element={<ItemListContainer/>} />
        <Route path='/hombre' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>

    </BrowserRouter>
    </>);
  
}

export default App;
