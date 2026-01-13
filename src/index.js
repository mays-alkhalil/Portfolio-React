import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContentProvider } from "./content/ContentContext";
// import reportWebVitals from './reportWebVitals';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const initialTheme = getInitialTheme();

if (typeof window !== 'undefined') {
  document.body.classList.toggle('dark', initialTheme === 'dark');
  document.documentElement.setAttribute('data-theme', initialTheme);
  window.localStorage.setItem('theme', initialTheme);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
