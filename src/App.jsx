import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonComponent innerText="testo 1" />
      <ButtonComponent innerText="testo 2" />
      <ButtonComponent innerText="testo 3" />
      <br />
      <ImageComponent
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqu_g9F0-waKbj0QVbojPolPbTymFEbbY6Q&s"
        alt="immagine1"
      />
      <ImageComponent
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT4J84HPE7OAoL_jv0q1avOOlVhTxJnye3Q&s"
        alt="immagine1"
      />
    </div>
  );
}

export default App;
