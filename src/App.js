import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  //logica
  const myFunction = ()=>{}

  const stylesP = {
    border: 'solid 2px blue',
    padding: '20px',
  }

  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting={'Elemental, Watson'}></ItemListContainer>

    </>);
  
}

export default App;
