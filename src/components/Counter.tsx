import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>
        Counter <span id="counter">{count}</span>
      </p>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="decrement" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
