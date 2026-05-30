import "./App.css";
import Counter from "./components/Counter";
import SimpleCard from "./components/SimpleCard";

function App() {
  return (
    <>
      <div>
        <h2>Get started With React + TypeScript</h2>
        <SimpleCard name="Product 1" price={19.99} isSpecial={true} />
        <SimpleCard name="Product 2" price={29.99} />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
