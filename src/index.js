import React from "react";
import ReactDOM from "react-dom";
import useLoading from "./useLoading";
import "./styles.css";
import arr from "./arr.js";

function App() {
  const loading = useLoading(arr);
  return <div className="App">{loading}</div>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
