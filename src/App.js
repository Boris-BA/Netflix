import "./App.css";
import data from "./data.json";
// import logoNetflix from "./image/LogoNetflix.png";
import Title from "./components/Title";

function App() {
  // const tab1 = data;

  return (
    <div className="App">
      <div className="header">
        {/* <img className="logo" src={logoNetflix} alt="Netflix" /> */}
        Netflix
      </div>
      <Title data={data}></Title>
    </div>
  );
}

export default App;
