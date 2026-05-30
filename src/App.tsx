import "./App.css";
import SimpleCard from "./components/SimpleCard";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h2>Get started With React + TypeScript</h2>
          <SimpleCard name="Product 1" price={19.99} isSpecial={true} />
          <SimpleCard name="Product 2" price={29.99} />
        </div>
      </section>
    </>
  );
}

export default App;
