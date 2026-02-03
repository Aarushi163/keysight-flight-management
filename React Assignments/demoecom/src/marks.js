import React, { useState, useEffect } from "react";

function App() {
  const [name] = useState("Alex");
  const [age] = useState(21);

  const [maths, setMaths] = useState(50);
  const [chemistry, setChemistry] = useState(60);
  const [physics, setPhysics] = useState(70);

  const [total, setTotal] = useState(0);

  // calculate total whenever marks change
  useEffect(() => {
    setTotal(maths + chemistry + physics);
  }, [maths, chemistry, physics]);

  const updateMarks = () => {
    setMaths(maths + 10);
    setChemistry(chemistry + 10);
    setPhysics(physics + 10);
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px", width: "400px" }}>
      <h2>Marksheet</h2>

      <p>
        <b>Name:</b> {name} &nbsp;&nbsp;
        <b>Age:</b> {age}
      </p>

      <p><b>Total:</b> {total}</p>

      <p>Maths: {maths}</p>
      <p>Chemistry: {chemistry}</p>
      <p>Physics: {physics}</p>

      <button onClick={updateMarks}>Update</button>
    </div>
  );
}

export default App;
