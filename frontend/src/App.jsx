import { useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const fileInputRef = useRef(null);

  const submitForm = (e) => {
    // Do not redirect / reload page
    e.preventDefault();
    // Check if ref was initialized
    if (fileInputRef.current == null) return;

    // Get file from ref
    const fileToUpload = fileInputRef.current.files[0];
    // Create new FormData object to hold the data we want to send
    const formData = new FormData();
    // Populate that object
    formData.append("fileToUpload", fileToUpload);

    axios
      .post("http://localhost:8080/media", formData)
      .then(() => {
        console.log("Upload success");
      })
      .catch(() => {
        console.error("Upload failed");
      });
  };

  return (
    <div className="App">
      <form
        // action="http://localhost:8080/media"
        // method="POST"
        // encType="multipart/form-data"
        onSubmit={submitForm}
      >
        <label>Choose file to upload</label>
        <input type="file" name="fileToUpload" ref={fileInputRef} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
