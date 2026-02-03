import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
};

export default App;
