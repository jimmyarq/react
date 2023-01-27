import './App.css';
import { Counter } from "./components/Counter-UseState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hola React - Counter </h1>
        <Counter initialValue={0}></Counter>
        <Counter initialValue={50}></Counter>      
      </header>
    </div>
  );
}

export default App;
