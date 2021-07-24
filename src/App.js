import logo from './logo.svg';
import NavBar from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bienvenidos a Tienda FutFem!
        </p>
        <a
          className="App-link"
          href="https://www.futbolfemeninoargentino.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder al sitio
        </a>
      </header>
    </div>
  );
}

export default App;
