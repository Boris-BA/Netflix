import "./App.css";
import data from "./data.json";
// import logoNetflix from "./image/LogoNetflix.png";

function App() {
  // const tab1 = data;

  return (
    <div className="App">
      <div className="header">
        {/* <img className="logo" src={logoNetflix} alt="Netflix" /> */}
        Netflix
      </div>
      <div className="container">{console.log(data)}</div>
    </div>
  );
}

export default App;
