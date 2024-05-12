import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <p>
          {" "}
          This project was coded by{" "}
          <a
            href="https://github.com/hollycosslett"
            target="_blank"
            rel="noreferrer"
          >
            Holly Cosslett
          </a>
          ,{" "}
          <a
            href="https://github.com/hollycosslett/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced{" "}
          </a>
          on GitHub and hosted on{" "}
          <a
            href="https://weather-application-react-shecodes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
