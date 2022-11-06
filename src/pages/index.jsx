import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [answer, setAnswer] = useState("");
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  async function add() {
    console.log("hello");
    setAnswer(await invoke("add", { num1, num2 }));
  }

  return (
    <div className="container">
      <h1>Addition</h1>

      <div className="row">
        <div>
          <input
            onChange={(e) => setnum1(parseInt(e.currentTarget.value))}
            placeholder="Enter a number"
          />
          <input
            onChange={(e) => setnum2(parseInt(e.currentTarget.value))}
            placeholder="Enter a number"
          />

          <button type="button" onClick={() => add()}>
            add
          </button>
        </div>
      </div>

      <p>{answer}</p>
    </div>
  );
}

export default App;
