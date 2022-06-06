import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configStore from "./store/store";
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import store  from  './store/store'
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode></Provider>
);