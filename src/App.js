import "./App.css";
import data from "./data.json";
import logoNetflix from "./image/LogoNetflix.png";
import Title from "./components/Title";

function App() {
  // const tab1 = data;

  return (
    <div className="App container">
      <div className="header">
        <img className="logo" src={logoNetflix} alt="Netflix" />
      </div>
      <div className="main">
        <Title data={data}></Title>
      </div>
    </div>
  );
}

export default App;
