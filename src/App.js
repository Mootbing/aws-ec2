import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <header className="App-header">
        <img src={"https://purepng.com/public/uploads/medium/purepng.com-cornvegetables-corn-maize-sweet-corn-grain-dent-corn-941524713028ikciq.png"} className="App-logo" alt="logo" />
        <div style={{display: "flex"}}>
          <span style={{paddingTop: 5, padding: 5, backgroundColor: "red", color: "blue", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, border: "1px solid #222"}}>CORN</span>
          <span style={{borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 5, backgroundColor: "blue", color: "red"}}>HUB</span>
        </div>
        <p>
          The world's most innovative farmer education website.
        </p>
      </header>
    </div>
  );
}

export default App;
