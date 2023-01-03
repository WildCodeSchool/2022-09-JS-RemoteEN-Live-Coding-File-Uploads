import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <form
        action="http://localhost:8080/uploadSingle"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Choose file to upload</label>
        <input type="file" name="fileToUpload" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
