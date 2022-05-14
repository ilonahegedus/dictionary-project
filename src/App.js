import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="greeting" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/ilonahegedus/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Ilona Hegedus
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
