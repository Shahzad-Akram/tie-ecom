import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import "./styles/scroll-box.styles.css";
import "./styles/animation.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";
import App from "./App";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
