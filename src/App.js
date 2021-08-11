import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from "./components/NavBar";
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Saludos"/>
    </div>
  );
}

export default App;
console.log(React.version);