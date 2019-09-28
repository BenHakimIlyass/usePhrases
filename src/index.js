import React from "react";
import ReactDOM from "react-dom";
import usePhrases from "./useLoading";
import "./styles.css";
import arr from "./arr.js";

function App() {
  const loading = usePhrases(arr);
  return <div className="App">{loading}</div>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
