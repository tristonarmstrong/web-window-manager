import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "web-window-manager";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <button
            className="App-link"
            onClick={() =>
              window.WindowManager?.openWindow({
                link: "/",
                name: `new child #${Math.random() * 100}`
              })
            }
          >
            Press this button to open a new window
          </button>
          <button
            className="App-link"
            onClick={() => window.WindowManager?.recursivelyCloseChildren()}
          >
            Press this button to close all children RECURSIVELY
          </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
